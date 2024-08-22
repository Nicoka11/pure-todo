import { useStorageState } from "@/hooks/useStorageState";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "expo-router";
import { useContext, createContext, type PropsWithChildren } from "react";

const AuthContext = createContext<{
  signIn: (session?: Session | null) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const router = useRouter();
  return (
    <AuthContext.Provider
      value={{
        signIn: (session) => {
          setSession(session?.refresh_token || null);
          router.push("/(app)/(tabs)/home");
        },
        signOut: () => {
          setSession(null);
          router.push("/(app)/(tabs)/home");
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
