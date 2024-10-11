
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import Sidebar from "@/components/sidebar";

export function AddMovie() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col justify-center items-center h-full sm:gap-4 sm:py-4 sm:pl-14">
      {/* <Header/> */}
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Add New Movie</CardTitle>
            <CardDescription>Fill out the details to add a new movie.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Movie Title</Label>
                <Input id="title" placeholder="Enter movie title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre">Genre</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="action">Action</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="drama">Drama</SelectItem>
                    <SelectItem value="horror">Horror</SelectItem>
                    <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter movie description" rows={4} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="poster">Movie Poster</Label>
                <Input id="poster" type="file" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="release-date">Release Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start font-normal">
                      Pick a date
                      <div className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <Label htmlFor="showtimes">Showtimes</Label>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <Input id="showtime-1" type="time" />
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add Showtime</span>
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Input id="showtime-2" type="time" />
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Add Showtime</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Add Movie</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
