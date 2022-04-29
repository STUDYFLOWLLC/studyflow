import React, { useContext, useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

const AuthContext = React.createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    // Check active sessions and sets the user
    const session = await supabase.auth.session()

    setUser(session?.user ?? null)
    setLoading(false)

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [])

  const value = {
    signOut: () => supabase.auth.signOut(),
    signInWithGoogle: () =>
      supabase.auth.signIn(
        {
          provider: 'google'
        },
        {
          redirectTo: 'http://localhost:3000/dash'
        }
      ),
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
