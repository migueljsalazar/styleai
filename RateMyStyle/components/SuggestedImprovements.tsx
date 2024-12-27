import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SuggestedImprovements() {
  const improvements = [
    {
      title: "Color Coordination",
      description: "Try pairing your bold top with neutral bottoms for a more balanced look."
    },
    {
      title: "Accessorizing",
      description: "Add a statement necklace to draw attention to your face and complete the outfit."
    },
    {
      title: "Fit Adjustment",
      description: "Consider having the pants tailored for a more polished appearance."
    }
  ]

  return (
    <div className="space-y-4">
      {improvements.map((improvement, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{improvement.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{improvement.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

