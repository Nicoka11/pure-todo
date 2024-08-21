import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Redirect, Slot } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";

export function AuthGuard({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!session) return <Redirect href="/login" />;

  return <Slot />;
}
