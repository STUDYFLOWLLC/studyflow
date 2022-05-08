/* eslint-disable no-promise-executor-return */
/* eslint-disable no-shadow */
import { ApiError, Provider, Session, User } from '@supabase/supabase-js'
import SpinnerPage from 'components/spinners/SpinnerPage'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { supabase } from 'utils/supabase'

interface Props {
  children: ReactNode
}

interface ValueExport {
  signOut: () => Promise<{
    error: ApiError | null
  }>
  signInWithGoogle: () => Promise<{
    session: Session | null
    user: User | null
    provider?: Provider | undefined
    url?: string | null | undefined
    error: ApiError | null
  }>
  user: User | null
  session: Session | undefined
}

// the four below declarations are needed for the default context
const defaultSession: Session = {
  access_token: '',
  token_type: '',
  user: {
    id: '',
    app_metadata: {},
    user_metadata: {},
    aud: '',
    created_at: '',
  },
}
const defaultUser: User = {
  id: '',
  app_metadata: {},
  user_metadata: {},
  aud: '',
  created_at: '',
}
const initialExport: ValueExport = {
  signOut: () =>
    new Promise((resolve) => resolve({ error: { message: '', status: 0 } })),
  signInWithGoogle: () =>
    new Promise((resolve) =>
      resolve({
        session: defaultSession,
        user: defaultUser,
        error: {
          message: '',
          status: 0,
        },
      }),
    ),
  user: defaultUser,
  session: defaultSession,
}
const AuthContext = createContext<ValueExport>(initialExport)

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>({
    id: '',
    app_metadata: {},
    user_metadata: {},
    aud: '',
    created_at: '',
  })
  const [session, setSession] = useState<Session | undefined>({
    access_token: '',
    token_type: '',
    user: {
      id: '',
      app_metadata: {},
      user_metadata: {},
      aud: '',
      created_at: '',
    },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and sets the user
    ;(async () => {
      const session = await supabase.auth.session()
      setSession(session ?? undefined)
      setUser(session?.user ?? null)
      setLoading(false)
    })()

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      },
    )

    return () => {
      listener?.unsubscribe()
    }
  }, [])

  const value = useMemo(
    (): ValueExport => ({
      signOut: () => supabase.auth.signOut(),
      signInWithGoogle: () =>
        supabase.auth.signIn(
          {
            provider: 'google',
          },
          {
            redirectTo: 'http://localhost:3000/success',
          },
        ),
      user,
      session,
    }),
    [user],
  )

  if (loading) return <SpinnerPage />

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
