'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, LogOut } from 'lucide-react'
import { useAuth } from './AuthProvider'
import { useRouter } from 'next/navigation'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white shadow-md">
      <Link href="/">
        <span className="text-xl font-bold">Rate My Style</span>
      </Link>
      <div className="hidden md:flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/history">History</Link>
        <Link href="/profile">Profile</Link>
        {user && (
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        )}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Navigate through the app
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/history" onClick={() => setIsOpen(false)}>History</Link>
            <Link href="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
            <Link href="/account" onClick={() => setIsOpen(false)}>Account</Link>
            <Link href="/support" onClick={() => setIsOpen(false)}>Support</Link>
            {user && (
              <Button variant="outline" onClick={() => {
                handleLogout()
                setIsOpen(false)
              }}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

