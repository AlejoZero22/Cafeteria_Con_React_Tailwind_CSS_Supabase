import { createContext, useContext, UseEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const AutoContext = createContext()

export function AutoProvider({ children }) {
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
        <AutoContext.Provider value={{session, loading}}>
            {children}
        </AutoContext.Provider>
    )
}

export function useAuto() {
    return useContext(AutoContext)
}
