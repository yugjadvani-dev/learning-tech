
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactUs() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team is here to help. Contact us with any questions or feedback.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Briefly describe your inquiry" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Provide more details" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Information</h2>
            <div className="mt-6 space-y-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-muted-foreground">123 Main Street, Anytown USA 12345</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
