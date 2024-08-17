import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function AddEvent() {
  const [eventImage, setEventImage] = useState<any>(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleImageChange = (e: any) => {
    setEventImage(e.target.files[0]);
  };

  const handleNameChange = (e: any) => {
    setEventName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setEventDescription(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", eventImage);
    formData.append("name", eventName);
    formData.append("description", eventDescription);

    fetch("http://localhost:8888/api/upload-event", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Add Event</h2>
        </div>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create a New Event</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" encType="multipart/form-data">
              <div className="grid gap-2">
                <Label htmlFor="event-image">Event Image</Label>
                <Input
                  id="event-image"
                  type="file"
                  onChange={handleImageChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-name">Event Name</Label>
                <Input
                  id="event-name"
                  type="text"
                  placeholder="Enter event name"
                  value={eventName}
                  onChange={handleNameChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-description">Event Description</Label>
                <Textarea
                  id="event-description"
                  placeholder="Enter event description"
                  value={eventDescription}
                  onChange={handleDescriptionChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">
              Create Event
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
