import { createContext, useContext, UseEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AuthoContext = createContext()

export function AuthoProvider({ children }) {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)
            setLoading(false)
        })

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            (_event, session) => {setSession(session)}
        })

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    return (
        <AuthoContext.Provider value={{session, loading}}>
            {children}
        </AuthoContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthoContext)
}
