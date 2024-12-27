'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Camera, Upload } from 'lucide-react'

export default function GetScore() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [occasion, setOccasion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !occasion) {
      toast({
        title: "Error",
        description: "Please upload an image and select an occasion.",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push('/results')
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Get Outfit Score</h2>
        <div className="space-y-4">
          <div className="flex justify-center">
            {preview ? (
              <img src={preview} alt="Preview" className="max-w-full h-64 object-cover rounded-lg" />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No image uploaded</span>
              </div>
            )}
          </div>
          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>
            <Button type="button" variant="outline">
              <Camera className="mr-2 h-4 w-4" /> Take Photo
            </Button>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="occasion">Where are you headed?</Label>
          <Select value={occasion} onValueChange={setOccasion}>
            <SelectTrigger>
              <SelectValue placeholder="Select an occasion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="party">Party</SelectItem>
              <SelectItem value="casual">Casual Outing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Get Score'}
        </Button>
      </form>
    </div>
  )
}

