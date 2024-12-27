'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  email: string
  subscribed: boolean
} | null

type AuthContextType = {
  user: User
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  subscribe: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (e.g., by checking local storage or a token)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Implement your login logic here
    // For now, we'll just set a mock user
    const mockUser = { id: '1', email, subscribed: false }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const subscribe = () => {
    if (user) {
      const updatedUser = { ...user, subscribed: true }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, subscribe }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

