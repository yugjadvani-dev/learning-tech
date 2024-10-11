import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

export function Showtime() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedShowtime, setSelectedShowtime] = useState<any>(null)
  const movie = {
    title: "Avengers: Endgame",
    poster: "/placeholder.svg",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
  }
  const showtimes = [
    {
      theater: "AMC Theatres",
      times: [
        { time: "10:00 AM", available: true },
        { time: "1:30 PM", available: true },
        { time: "5:00 PM", available: true },
        { time: "8:30 PM", available: true },
      ],
    },
    {
      theater: "Regal Cinemas",
      times: [
        { time: "11:00 AM", available: true },
        { time: "2:45 PM", available: true },
        { time: "6:15 PM", available: true },
        { time: "9:45 PM", available: false },
      ],
    },
    {
      theater: "Cinemark Theatres",
      times: [
        { time: "12:30 PM", available: true },
        { time: "4:00 PM", available: true },
        { time: "7:30 PM", available: true },
        { time: "11:00 PM", available: false },
      ],
    },
  ]
  const handleDateChange = (date:any) => {
    setSelectedDate(date)
  }
  const handleShowtimeSelect = (showtime:any) => {
    setSelectedShowtime(showtime)
  }
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4ySyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413626-shscbthgel-portrait.jpg"
            alt={movie.title}
            width={600}
            height={900}
            className="w-full h-auto rounded-lg"
            style={{ aspectRatio: "600/900", objectFit: "cover" }}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-muted-foreground">{movie.description}</p>
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  {selectedDate.toLocaleDateString()}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar value={selectedDate} onChange={handleDateChange} className="p-4" />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Showtimes</h2>
        <div className="grid gap-6">
          {showtimes.map((showtime, index) => (
            <div key={index} className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold">{showtime.theater}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {showtime.times.map((time, timeIndex) => (
                  <Button
                    key={timeIndex}
                    variant={selectedShowtime?.time === time.time ? "primary" : time.available ? "outline" : "ghost"}
                    onClick={() =>
                      handleShowtimeSelect({
                        theater: showtime.theater,
                        time: time.time,
                        available: time.available,
                      })
                    }
                    disabled={!time.available}
                    className="w-full"
                  >
                    {time.time}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedShowtime && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Select Seats</h2>
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold">
                  {selectedShowtime.theater} - {selectedShowtime.time}
                </p>
                <p className="text-muted-foreground">{selectedDate.toLocaleDateString()}</p>
              </div>
              <Button>Book Now</Button>
            </div>
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: 50 }, (_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 bg-card rounded-md flex items-center justify-center cursor-pointer transition-colors ${
                    selectedShowtime.available
                      ? "hover:bg-primary hover:text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
