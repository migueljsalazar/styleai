'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from './AuthProvider'

const publicPaths = ['/auth/login', '/auth/signup']

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!user && !publicPaths.includes(pathname)) {
      router.push('/auth/login')
    }
  }, [user, router, pathname])

  if (!user && !publicPaths.includes(pathname)) {
    return null
  }

  return <>{children}</>
}

