import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function UserRating() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="/placeholder.svg"
            alt="Movie Poster"
            width={600}
            height={900}
            className="w-full h-auto rounded-lg"
            style={{ aspectRatio: "600/900", objectFit: "cover" }}
          />
        </div>
        <div>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">The Shawshank Redemption</h1>
              <div className="text-muted-foreground text-sm">Directed by Frank Darabont</div>
              <div className="text-muted-foreground text-sm">Released in 1994</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <StarIcon className="w-6 h-6 fill-primary" />
                <StarIcon className="w-6 h-6 fill-primary" />
                <StarIcon className="w-6 h-6 fill-primary" />
                <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">4.7</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <div className="grid gap-4">
          <Card className="p-4 flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <div className="font-medium">John Doe</div>
              </div>
              <p className="text-muted-foreground">
                This movie is a true masterpiece. The acting, the story, the direction - everything is just perfect.
                I've watched it multiple times and it never fails to move me.
              </p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                </div>
                <div className="font-medium">Jane Smith</div>
              </div>
              <p className="text-muted-foreground">
                I absolutely loved this movie. The performances were outstanding, and the story was so compelling. It's
                one of my all-time favorites.
              </p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
                <div className="font-medium">Michael Johnson</div>
              </div>
              <p className="text-muted-foreground">
                This movie is a true classic. The performances are unforgettable, and the story is so powerful. I highly
                recommend it to anyone who loves great cinema.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
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
