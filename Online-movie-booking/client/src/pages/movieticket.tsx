
import { Button } from "@/components/ui/button"

export function Movieticket() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-karan-aujla-it-was-all-a-dream-ahmedabad-0-2024-9-19-t-10-37-41.jpg"
            alt="Movie Poster"
            width={600}
            height={800}
            className="w-full h-auto rounded-lg object-cover"
            style={{ aspectRatio: "600/800", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Interstellar</h1>
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">7:00 PM</div>
            <div className="text-muted-foreground">AMC Theatres, New York</div>
          </div>
          <p className="text-muted-foreground">
            A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
          </p>
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <h2 className="text-2xl font-bold mb-4">Select Seats</h2>
        <div className="grid grid-cols-10 gap-2">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className={`w-8 h-8 bg-muted rounded-md flex items-center justify-center cursor-pointer transition-colors ${
                i % 5 === 0 ? "text-red-500" : i % 3 === 0 ? "text-green-500" : "text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <h2 className="text-2xl font-bold mb-4">Ticket Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Adult</div>
              <div className="text-2xl font-bold">$15.99</div>
            </div>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Child</div>
              <div className="text-2xl font-bold">$10.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 flex justify-end">
        <Button size="lg" className="bg-primary text-primary-foreground">
          Continue to Payment
        </Button>
      </div>
    </div>
  )
}
