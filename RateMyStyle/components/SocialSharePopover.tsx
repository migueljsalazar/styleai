import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Share } from 'lucide-react'

export function SocialSharePopover() {
  const handleShare = (platform: string) => {
    // Implement actual sharing logic here
    console.log(`Sharing to ${platform}`)
    // You would typically open a new window with the appropriate sharing URL here
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Share className="h-4 w-4" />
          <span className="sr-only">Share to Social Media</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Share your style</h4>
          <div className="flex justify-around">
            <Button size="icon" variant="outline" onClick={() => handleShare('Instagram')}>
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Share to Instagram</span>
            </Button>
            <Button size="icon" variant="outline" onClick={() => handleShare('Facebook')}>
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Share to Facebook</span>
            </Button>
            <Button size="icon" variant="outline" onClick={() => handleShare('TikTok')}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="sr-only">Share to TikTok</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

