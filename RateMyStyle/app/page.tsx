import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <h1 className="text-4xl font-bold mb-8">Rate My Style</h1>
      <Link href="/get-score">
        <Button size="lg">Get Outfit Score</Button>
      </Link>
    </div>
  )
}

