import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactUs() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 md:px-0">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            Have a question or feedback? Reach out to our support team and we'll
            be happy to assist you.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
