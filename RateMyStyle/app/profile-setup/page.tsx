'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const steps = ['Favorite Colors', 'Style Preferences', 'Size Preferences']

export default function ProfileSetup() {
  const [currentStep, setCurrentStep] = useState(0)
  const [favoriteColors, setFavoriteColors] = useState<string[]>([])
  const [stylePreferences, setStylePreferences] = useState<string[]>([])
  const [sizePreferences, setSizePreferences] = useState({
    tops: '',
    bottoms: '',
    shoes: '',
  })
  const router = useRouter()
  const { toast } = useToast()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    // Implement profile setup submission logic here
    toast({
      title: "Profile setup complete",
      description: "Your preferences have been saved!",
    })
    router.push('/')
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Label>Select your favorite colors</Label>
            <div className="flex flex-wrap gap-2">
              {['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'Orange', 'Black', 'White'].map((color) => (
                <Button
                  key={color}
                  variant={favoriteColors.includes(color) ? "default" : "outline"}
                  onClick={() => {
                    if (favoriteColors.includes(color)) {
                      setFavoriteColors(favoriteColors.filter(c => c !== color))
                    } else {
                      setFavoriteColors([...favoriteColors, color])
                    }
                  }}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <Label>Select your style preferences</Label>
            {['Casual', 'Formal', 'Edgy'].map((style) => (
              <div key={style} className="flex items-center space-x-2">
                <Checkbox
                  id={style}
                  checked={stylePreferences.includes(style)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setStylePreferences([...stylePreferences, style])
                    } else {
                      setStylePreferences(stylePreferences.filter(s => s !== style))
                    }
                  }}
                />
                <Label htmlFor={style}>{style}</Label>
              </div>
            ))}
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label>Select your size preferences</Label>
            {['tops', 'bottoms', 'shoes'].map((item) => (
              <div key={item} className="space-y-2">
                <Label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</Label>
                <Select
                  value={sizePreferences[item as keyof typeof sizePreferences]}
                  onValueChange={(value) => setSizePreferences({...sizePreferences, [item]: value})}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={`Select ${item} size`} />
                  </SelectTrigger>
                  <SelectContent>
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Profile Setup</h2>
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`w-1/3 h-2 rounded-full ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-4">{steps[currentStep]}</h3>
        {renderStep()}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
          >
            Skip for Now
          </Button>
          <Button onClick={handleNext}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  )
}

