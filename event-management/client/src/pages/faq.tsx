import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
              Get the answers you need about our event management services.
            </p>
          </div>
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                What services do you offer for event management?
                <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                <p>
                  Our event management services include venue selection, event planning, vendor coordination, event
                  promotion, and on-site management. We work closely with our clients to ensure every aspect of the
                  event is executed flawlessly.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                How do you ensure the success of an event?
                <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                <p>
                  We have a proven track record of delivering successful events by focusing on detailed planning,
                  effective communication, and proactive problem-solving. Our experienced team works tirelessly to
                  anticipate and address any challenges that may arise, ensuring a seamless and memorable experience for
                  all attendees.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                What is your pricing structure?
                <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                <p>
                  Our pricing is tailored to the specific needs of each event. We offer a range of packages to suit
                  different budgets and event sizes. Our team will work with you to create a customized plan that fits
                  your requirements and provides exceptional value. We are transparent about our pricing and happy to
                  discuss any questions you may have.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                How do you handle event cancellations or postponements?
                <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                <p>
                  We understand that unexpected circumstances can arise, and we are committed to working closely with
                  our clients to handle any changes or cancellations with professionalism and care. Our team will guide
                  you through the process, ensure clear communication with all stakeholders, and make every effort to
                  minimize the impact on your event.
                </p>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-lg font-medium transition-colors hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Do you have experience with different types of events?
                <ChevronDownIcon className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                <p>
                  Absolutely! Our team has extensive experience in managing a wide range of events, including corporate
                  conferences, weddings, galas, festivals, and more. We understand the unique requirements and
                  challenges of each event type and tailor our approach accordingly to ensure a successful outcome.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props:any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}