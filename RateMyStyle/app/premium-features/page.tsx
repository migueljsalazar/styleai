'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SuggestedImprovements } from '@/components/SuggestedImprovements'
import { StylistChat } from '@/components/StylistChat'

export default function PremiumFeatures() {
  const router = useRouter()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Premium Features</h1>
      <Button onClick={() => router.push('/get-score')} className="mb-6">
        Get New Score
      </Button>
      <Tabs defaultValue="improvements">
        <TabsList>
          <TabsTrigger value="improvements">Suggested Improvements</TabsTrigger>
          <TabsTrigger value="chat">Stylist Chat</TabsTrigger>
        </TabsList>
        <TabsContent value="improvements">
          <SuggestedImprovements />
        </TabsContent>
        <TabsContent value="chat">
          <StylistChat />
        </TabsContent>
      </Tabs>
    </div>
  )
}

