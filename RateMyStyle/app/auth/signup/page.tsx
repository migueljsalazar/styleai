'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from '@/components/AuthProvider'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { toast } = useToast()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Implement sign up logic here
      // For now, we'll just log in the user
      await login(email, password)
      toast({
        title: "Account created",
        description: "You've successfully signed up!",
      })
      router.push('/profile-setup')
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
  )
}

