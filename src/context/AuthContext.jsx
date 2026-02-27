import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  const fetchUserRole = async (userId) => {
     const { data, error } = await supabase.from("profiles").select("role").eq("id", userId).maybeSingle();
    if (!error && data) {
      setRole(data.role);
    }
  };

  useEffect(() => {
    const getInitialSession = async () => {
      const { data } = await supabase.auth.getSession();
      const currentSession = data.session;

      setSession(currentSession);

      if (currentSession?.user?.id) {
       fetchUserRole(currentSession.user.id);
      }
      setLoading(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      
      if (session?.user) {
        fetchUserRole(session.user.id);
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);



  return (
    <AuthContext.Provider value={{ session, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
