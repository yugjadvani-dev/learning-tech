import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              to="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              
            >
              <VideoIcon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Movie Booking</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  
                >
                  <LayoutDashboardIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  
                >
                  <VideoIcon className="h-5 w-5" />
                  <span className="sr-only">Movies</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Movies</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  
                >
                  <TheaterIcon className="h-5 w-5" />
                  <span className="sr-only">Theaters</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Theaters</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  
                >
                  <BookAIcon className="h-5 w-5" />
                  <span className="sr-only">Bookings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Bookings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside> */}
      <Sidebar/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header/>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Bookings</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">12,345</span>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <ArrowUpIcon className="h-4 w-4 inline-block mr-1" />
                    5.2% increase
                  </div>
                  <Link to="/" className="text-primary" >
                    View Bookings
                  </Link>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">$123,456</span>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <ArrowUpIcon className="h-4 w-4 inline-block mr-1" />
                    8.3% increase
                  </div>
                  <Link to="/" className="text-primary" >
                    View Revenue
                  </Link>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">5,678</span>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <ArrowUpIcon className="h-4 w-4 inline-block mr-1" />
                    3.1% increase
                  </div>
                  <Link to="/" className="text-primary" >
                    View Users
                  </Link>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Movies Listed</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">789</span>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <ArrowUpIcon className="h-4 w-4 inline-block mr-1" />
                    2.4% increase
                  </div>
                  <Link to="/" className="text-primary" >
                    View Movies
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    
                  >
                    <VideoIcon className="h-5 w-5" />
                    Manage Movies
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    
                  >
                    <TheaterIcon className="h-5 w-5" />
                    Manage Theaters
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    
                  >
                    <BookAIcon className="h-5 w-5" />
                    Manage Bookings
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <VideoIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">New Movie Added</p>
                      <p className="text-sm text-muted-foreground">Avengers: Endgame</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookAIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">New Booking</p>
                      <p className="text-sm text-muted-foreground">Ticket #12345</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <VideoIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">New Movie Added</p>
                      <p className="text-sm text-muted-foreground">Guardians of the Galaxy</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">3 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Movie Premiere</p>
                      <p className="text-sm text-muted-foreground">Avengers: Endgame</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">April 26, 2023</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Theater Renovation</p>
                      <p className="text-sm text-muted-foreground">Downtown Cinema</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">May 15, 2023</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Movie Festival</p>
                      <p className="text-sm text-muted-foreground">Summer Film Fest</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">June 1, 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function ArrowUpIcon(props:any) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function BookAIcon(props:any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="m8 13 4-7 4 7" />
      <path d="M9.1 11h5.7" />
    </svg>
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


export function LayoutDashboardIcon(props:any) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


export function LogOutIcon(props:any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


export function SearchIcon(props:any) {
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


function TheaterIcon(props:any) {
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
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </svg>
  )
}


function VideoIcon(props:any) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
