import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Wishlist() {
  const [wishlist, setWishlist] = useState([
    {
      title: "The Shawshank Redemption",
      year: 1994,
      image: "/the-shawshank-redemption.jpg",
    },
    {
      title: "The Godfather",
      year: 1972,
      image: "/the-godfather.jpg",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      image: "/movie-2.jpg",
    },
    {
      title: "Inception",
      year: 2010,
      image: "/movie-1.jpg",
    },
  ]);
  const removeFromWishlist = (title: any) => {
    setWishlist(wishlist.filter((movie) => movie.title !== title));
  };
  const clearWishlist = () => {
    setWishlist([]);
  };
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-4xl mx-auto">
        <div className="grid gap-4">
          <h1 className="text-2xl font-bold tracking-tight">My Wishlist</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((movie) => (
              <div key={movie.title} className="grid gap-2 relative group">
                <img
                  src={movie.image}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="rounded-lg object-cover w-full aspect-[2/3] group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold line-clamp-2">{movie.title}</h3>
                  <p className="text-sm text-muted-foreground">{movie.year}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(movie.title)}
                  >
                    Remove from Wishlist
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={clearWishlist}>
            Clear Wishlist
          </Button>
        </div>
      </div>
    </section>
  );
}