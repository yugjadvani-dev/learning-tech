import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function BookAnAppointment() {
  return (
    <div className="max-w-2xl min-h-screen mx-auto p-6 sm:p-8 md:p-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        <p className="text-muted-foreground">
          Schedule your appointment with our healthcare professionals today.
        </p>
      </div>
      <Card>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full h-auto">
                    <span className="font-semibold uppercase text-[0.65rem]">
                      Select Date
                    </span>
                    <span className="font-normal">2024-08-25</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select>
              <SelectTrigger className="h-auto">
                <SelectValue
                  placeholder={
                    <div className="flex flex-col items-start">
                      <span className="font-semibold uppercase text-[0.65rem]">
                        Select Time
                      </span>
                      <span className="font-normal">9:00 AM</span>
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9:00">9:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="13:00">1:00 PM</SelectItem>
                <SelectItem value="14:00">2:00 PM</SelectItem>
                <SelectItem value="15:00">3:00 PM</SelectItem>
                <SelectItem value="16:00">4:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Appointment</Label>
            <Textarea
              id="reason"
              placeholder="Briefly describe the reason for your appointment"
              className="min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Book Appointment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
