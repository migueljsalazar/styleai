'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Star } from 'lucide-react'
import { useAuth } from '@/components/AuthProvider'
import { SocialSharePopover } from '@/components/SocialSharePopover'

export default function Results() {
  const [showPaywall, setShowPaywall] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  const handleViewImprovements = () => {
    if (user?.subscribed) {
      router.push('/premium-features')
    } else {
      setShowPaywall(true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Your Style Score</h2>
        <div className="flex justify-center">
          <img src="/placeholder.svg?height=300&width=300" alt="Outfit" className="w-64 h-64 object-cover rounded-lg" />
        </div>
        <div className="flex justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-8 h-8 text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <p className="text-center text-lg font-semibold">Sophisticated layering with bold colors!</p>
        <div className="flex justify-between">
          <SocialSharePopover />
          <Button onClick={handleViewImprovements}>View Suggested Improvements</Button>
        </div>
      </div>

      <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to Premium</DialogTitle>
            <DialogDescription>
              Get unlimited outfit scoring, personalized style recommendations, and access to our stylist chat feature.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Button className="w-full" onClick={() => router.push('/subscribe')}>
              Subscribe Now
            </Button>
            <Button variant="outline" className="w-full" onClick={() => setShowPaywall(false)}>
              Maybe Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

