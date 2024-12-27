'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

interface OutfitScore {
  id: number
  image: string
  score: number
  caption: string
  date: string
}

export default function History() {
  const [outfitScores, setOutfitScores] = useState<OutfitScore[]>([])

  useEffect(() => {
    // Simulate fetching data from an API
    const mockData: OutfitScore[] = [
      { id: 1, image: '/placeholder.svg?height=200&width=200', score: 4, caption: 'Chic and professional', date: '2023-06-01' },
      { id: 2, image: '/placeholder.svg?height=200&width=200', score: 5, caption: 'Perfect party outfit', date: '2023-05-28' },
      { id: 3, image: '/placeholder.svg?height=200&width=200', score: 3, caption: 'Casual and comfortable', date: '2023-05-25' },
    ]
    setOutfitScores(mockData)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Outfit History</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {outfitScores.map((outfit) => (
          <div key={outfit.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={outfit.image} alt={`Outfit ${outfit.id}`} className="w-full h-48 object-cover rounded-lg mb-2" />
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= outfit.score ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-sm mb-1">{outfit.caption}</p>
            <p className="text-xs text-gray-500">{outfit.date}</p>
            <Button variant="outline" className="w-full mt-2">View Details</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

