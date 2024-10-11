
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="bg-muted py-10 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Avengers: Endgame</h1>
                      <p className="text-muted-foreground mb-6">The epic conclusion to the Avengers saga.</p>
                      <div className="flex space-x-4">
                        <Button>Buy Tickets</Button>
                        <Button variant="secondary">Watch Trailer</Button>
                      </div>
                    </div>
                    <img
                      src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA4LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412743-zuegrxsnuj-portrait.jpg"
                      width={600}
                      height={400}
                      alt="Avengers: Endgame"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Dune</h1>
                      <p className="text-muted-foreground mb-6">An epic science fiction film.</p>
                      <div className="flex space-x-4">
                        <Button>Buy Tickets</Button>
                        <Button variant="secondary">Watch Trailer</Button>
                      </div>
                    </div>
                    <img
                      src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzIuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395211-eythmwuure-portrait.jpg"
                      width={600}
                      height={400}
                      alt="Dune"
                      className="rounded-lg object-cover"
                      style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Search Movies</h2>
              <p className="text-muted-foreground">Find the perfect movie for your next night out.</p>
            </div>
            <form className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Search movies, genres, or theaters"
                className="flex-1 rounded-lg px-4 py-2 bg-muted text-muted-foreground"
              />
              <Button>Search</Button>
            </form>
          </div>
        </section>
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Now Showing</h2>
              <p className="text-muted-foreground">Check out the latest movies in theaters now.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjcuNUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00370844-qksbzxgjsc-portrait.jpg"
                    width={300}
                    height={450}
                    alt={`Movie ${item}`}
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">Movie {item}</h3>
                    <p className="text-muted-foreground mb-4">A brief description of the movie.</p>
                    <div className="flex justify-between items-center">
                      <Button>Buy Tickets</Button>
                      <Button variant="secondary">Watch Trailer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Upcoming</h2>
              <p className="text-muted-foreground">Check out the latest upcoming movies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00403639-gvtntgkjys-portrait.jpg"
                    width={300}
                    height={450}
                    alt={`Movie ${item}`}
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">Movie {item}</h3>
                    <p className="text-muted-foreground mb-4">A brief description of the movie.</p>
                    <div className="flex justify-between items-center">
                      <Button>Set Reminder</Button>
                      <Button variant="secondary">Watch Trailer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10 md:py-16 lg:py-24">
          <div className="container mx-auto px-6 md:px-10 lg:px-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Top Rated</h2>
              <p className="text-muted-foreground">Check out the highest-rated movies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <img
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAyODguMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg"
                    width={300}
                    height={450}
                    alt={`Movie ${item}`}
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">Movie {item}</h3>
                    <p className="text-muted-foreground mb-4">A brief description of the movie.</p>
                    <div className="flex justify-between items-center">
                      <Button>Buy Tickets</Button>
                      <Button variant="secondary">Watch Trailer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}
