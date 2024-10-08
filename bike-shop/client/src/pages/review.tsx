
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

export function Review() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I recently purchased a new bike from Bike Shop and I couldn't be happier. The service was excellent,
                  and the bike is high-quality and rides like a dream. Highly recommend!
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Sarah Miller</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I had a great experience at Bike Shop. The staff was knowledgeable and helpful, and they had a wide
                  selection of bikes and accessories to choose from. I would definitely recommend them to anyone in the
                  market for a new bike.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Tom Wilson</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5 text-muted-foreground" />
                      <StarIcon className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I had a bit of a problem with my bike and brought it in for repair. The team at Bike Shop was able to
                  fix it quickly and at a reasonable price. I'm happy with the service and would use them again.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Leave a Review</h2>
            <form className="max-w-md mx-auto grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="rating">Rating</Label>
                <RadioGroup id="rating" defaultValue="4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="rating-5" value="5" />
                    <Label htmlFor="rating-5" className="font-normal">
                      5 stars
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="rating-4" value="4" />
                    <Label htmlFor="rating-4" className="font-normal">
                      4 stars
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="rating-3" value="3" />
                    <Label htmlFor="rating-3" className="font-normal">
                      3 stars
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="rating-2" value="2" />
                    <Label htmlFor="rating-2" className="font-normal">
                      2 stars
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="rating-1" value="1" />
                    <Label htmlFor="rating-1" className="font-normal">
                      1 star
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="comment">Comment</Label>
                <Textarea id="comment" placeholder="Share your thoughts..." />
              </div>
              <Button type="submit" className="justify-self-end">
                Submit Review
              </Button>
            </form>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Reviews</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>LJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Lisa Johnson</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I'm so impressed with the quality of the bikes at Bike Shop. I purchased a high-end mountain bike and
                  it's been an absolute joy to ride. The staff was incredibly helpful and knowledgeable throughout the
                  entire process.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Michael Rodriguez</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I had a great experience at Bike Shop. The staff was knowledgeable and helpful, and they had a wide
                  selection of bikes and accessories to choose from. I would definitely recommend them to anyone in the
                  market for a new bike.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Emily Wilson</h3>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I had a fantastic experience at Bike Shop. The staff was incredibly helpful and knowledgeable, and
                  they helped me find the perfect bike for my needs. The repair service was also top-notch. I highly
                  recommend this shop to anyone looking for a great bike and excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  
    </div>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function StarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
