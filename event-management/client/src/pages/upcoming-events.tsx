
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function UpcomingEvents() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-sm">johndoe@example.com</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link to={'/'} className="hover:underline" >
            Events
          </Link>
          <Link to={'/'} className="hover:underline" >
            Profile
          </Link>
          <Link to={'/'} className="hover:underline" >
            Settings
          </Link>
          <Link to={'/'} className="hover:underline" >
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button className="flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Create Event
          </Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <FilterIcon className="w-5 h-5" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>Date</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Location</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Event Type</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="w-5 h-5" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="date">
                  <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="location">Location</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="type">Event Type</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <Input
              type="search"
              placeholder="Search events..."
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Button variant="outline">
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tech Conference 2023</CardTitle>
              <CardDescription>
                Join us for the annual tech conference featuring industry leaders and cutting-edge technologies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <p>June 15, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
                <p>San Francisco, CA</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Design Workshop</CardTitle>
              <CardDescription>
                Explore the latest design trends and techniques in this hands-on workshop.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <p>July 10, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
                <p>New York, NY</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Marketing Summit</CardTitle>
              <CardDescription>
                Learn from industry experts and network with fellow marketers at this exclusive summit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <p>September 1, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
                <p>Chicago, IL</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Workshop</CardTitle>
              <CardDescription>
                Discover practical ways to make your business more sustainable and eco-friendly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <p>October 20, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-muted-foreground" />
                <p>Seattle, WA</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function FilterIcon(props:any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props:any) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PlusIcon(props:any) {
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
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}