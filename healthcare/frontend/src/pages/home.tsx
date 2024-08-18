import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Comprehensive Healthcare Solutions
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Acme Healthcare provides top-notch medical services across a
                    wide range of specialties, ensuring you and your loved ones
                    receive the best possible care.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to="/"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
              <img
                src="/home.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Specialized Departments
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Healthcare offers a wide range of specialized medical
                  services to cater to all your healthcare needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <HeartIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Cardiology</h3>
                </div>
                <p className="text-muted-foreground">
                  Our cardiology department provides comprehensive care for all
                  heart-related conditions, from preventive care to advanced
                  treatments.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CatIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Oncology</h3>
                </div>
                <p className="text-muted-foreground">
                  Our oncology team specializes in the diagnosis and treatment
                  of all types of cancer, using the latest advancements in
                  cancer care.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <BabyIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Pediatrics</h3>
                </div>
                <p className="text-muted-foreground">
                  Our pediatric department provides comprehensive care for
                  children, from routine check-ups to specialized treatments.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <BrainIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Neurology</h3>
                </div>
                <p className="text-muted-foreground">
                  Our neurology department specializes in the diagnosis and
                  treatment of all neurological conditions, from headaches to
                  complex brain disorders.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <TreesIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Pulmonology</h3>
                </div>
                <p className="text-muted-foreground">
                  Our pulmonology department provides comprehensive care for all
                  respiratory conditions, from asthma to lung cancer.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <BoneIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Orthopedics</h3>
                </div>
                <p className="text-muted-foreground">
                  Our orthopedic department specializes in the diagnosis and
                  treatment of all musculoskeletal conditions, from sports
                  injuries to joint replacements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Patients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied patients about their experiences with
                  Acme Healthcare.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="grid gap-4 p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">John Doe</h4>
                      <p className="text-muted-foreground">
                        Cardiology Patient
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The team at Acme Healthcare provided me with exceptional\n
                    care and support throughout my treatment. I highly\n
                    recommend them to anyone in need of medical services."
                  </p>
                </div>
                <div className="grid gap-4 p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Jane Smith</h4>
                      <p className="text-muted-foreground">Oncology Patient</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I am grateful for the compassionate and knowledgeable
                    care\n I received from the Acme Healthcare team. They made
                    a\n difficult time much easier to manage."
                  </p>
                </div>
                <div className="grid gap-4 p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold">Michael Johnson</h4>
                      <p className="text-muted-foreground">Pediatric Patient</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "The Acme Healthcare team provided exceptional care for my\n
                    child. They went above and beyond to ensure my family's\n
                    needs were met. I am truly grateful."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest News and Updates
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up-to-date with the latest news and developments from
                  Acme Healthcare.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="grid gap-4 p-8 md:p-10">
                  <img
                    src="/healthcare-1.jpg"
                    width="300"
                    height="200"
                    alt="News"
                    className="aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      New Advancements in Cancer Treatment
                    </h4>
                    <p className="text-muted-foreground">
                      Learn about the latest breakthroughs in cancer research
                      and treatment options at Acme Healthcare.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 p-8 md:p-10">
                  <img
                    src="/healthcare-2.jpg"
                    width="300"
                    height="200"
                    alt="News"
                    className="aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Acme Healthcare Expands Pediatric Services
                    </h4>
                    <p className="text-muted-foreground">
                      Discover the new and improved pediatric department at Acme
                      Healthcare, providing comprehensive care for children.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid gap-4 p-8 md:p-10">
                  <img
                    src="/healthcare-3.jpg"
                    width="300"
                    height="200"
                    alt="News"
                    className="aspect-video overflow-hidden rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">
                      Acme Healthcare Recognized for Excellence in Cardiology
                    </h4>
                    <p className="text-muted-foreground">
                      Acme Healthcare\'s cardiology department has been awarded
                      for its outstanding patient care and innovative
                      treatments.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BabyIcon(props: any) {
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function BoneIcon(props: any) {
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
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </svg>
  );
}

function BrainIcon(props: any) {
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
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function CatIcon(props: any) {
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
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </svg>
  );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HospitalIcon(props: any) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function TreesIcon(props: any) {
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
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  );
}
