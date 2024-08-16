import { Button } from "@/components/ui/button"

export function TermsAndConditions() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms and Conditions</h1>
          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to our event management website. By accessing or using our website, you agree to be bound by
                these terms and conditions and our privacy policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Event Registration</h2>
              <p className="text-muted-foreground">
                To register for an event, you must provide accurate and complete information. We reserve the right to
                cancel your registration if the information provided is inaccurate or incomplete.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Cancellation and Refunds</h2>
              <p className="text-muted-foreground">
                You may cancel your registration up to 14 days before the event. Refunds will be issued, less a 20%
                processing fee. No refunds will be given for cancellations within 14 days of the event.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website, including text, graphics, logos, and images, is the property of our company
                and is protected by copyright laws. You may not reproduce, distribute, or modify any content without our
                prior written consent.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                We will not be liable for any indirect, special, or consequential damages arising from your use of our
                website or attendance at our events. Our total liability will not exceed the amount paid for your event
                registration.
              </p>
            </section>
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Accept Terms and Conditions
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
