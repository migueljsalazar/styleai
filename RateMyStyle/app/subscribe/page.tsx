'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from '@/components/AuthProvider'

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | null>(null)
  const router = useRouter()
  const { toast } = useToast()
  const { subscribe } = useAuth()

  const handleSubscribe = () => {
    if (!selectedPlan) {
      toast({
        title: "Error",
        description: "Please select a plan.",
        variant: "destructive",
      })
      return
    }
    subscribe()
    toast({
      title: "Subscribed",
      description: `You've successfully subscribed to the ${selectedPlan} plan!`,
    })
    router.push('/premium-features')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Choose Your Plan</h2>
        <div className="space-y-4">
          <Button
            variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
            className="w-full"
            onClick={() => setSelectedPlan('monthly')}
          >
            Monthly Plan - $9.99/month
          </Button>
          <Button
            variant={selectedPlan === 'annual' ? 'default' : 'outline'}
            className="w-full"
            onClick={() => setSelectedPlan('annual')}
          >
            Annual Plan - $99.99/year
          </Button>
        </div>
        <Button className="w-full" onClick={handleSubscribe}>
          Subscribe Now
        </Button>
      </div>
    </div>
  )
}

