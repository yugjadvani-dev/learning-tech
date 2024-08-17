import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative h-[60vh] w-full overflow-hidden">
          <img
            src="/event2.jpg"
            alt="Event Planning"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Elevate Your Events with Our Expertise
              </h1>
              <p className="text-lg mb-8">
                At Event Planners, we specialize in creating unforgettable
                experiences for our clients. From corporate events to weddings,
                our team of experienced professionals will transform your vision
                into reality.
              </p>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Event Planners is a leading event management company that has been
              creating unforgettable experiences for our clients for over a
              decade. Our team of passionate and experienced professionals are
              dedicated to delivering exceptional service and ensuring the
              success of every event we plan.
            </p>
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                <img
                  src="/men1.jpg"
                  alt="Team Member 1"
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
                  <p className="text-muted-foreground mb-4">Event Planner</p>
                  <p>
                    Jane has over 8 years of experience in the event planning
                    industry, specializing in corporate events and weddings. She
                    is known for her meticulous attention to detail and her
                    ability to bring clients' visions to life.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                <img
                  src="/men2.jpg"
                  alt="Team Member 2"
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">John Smith</h3>
                  <p className="text-muted-foreground mb-4">
                    Event Coordinator
                  </p>
                  <p>
                    John has been with Event Planners for 5 years, bringing his
                    expertise in logistics and project management to ensure the
                    seamless execution of every event. He is known for his calm
                    demeanor and his ability to problem solve on the fly.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden shadow-md">
                <img
                  src="/women.jpg"
                  alt="Team Member 3"
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Sarah Lee</h3>
                  <p className="text-muted-foreground mb-4">Event Designer</p>
                  <p>
                    Sarah is the creative force behind Event Planners, bringing
                    her unique vision and attention to detail to every event she
                    designs. With a background in interior design, she has a
                    keen eye for creating stunning environments that leave a
                    lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6">
                <CalendarIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Event Planning</h3>
                <p className="text-muted-foreground">
                  From corporate events to weddings, our team of experienced
                  professionals will work with you to create a seamless and
                  unforgettable experience.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <WallpaperIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Event Design</h3>
                <p className="text-muted-foreground">
                  Our in-house design team will work with you to create a unique
                  and visually stunning event, tailored to your brand and
                  vision.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6">
                <CheckIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Event Management</h3>
                <p className="text-muted-foreground">
                  From venue selection to vendor coordination, our team will
                  handle all the logistics to ensure your event runs smoothly
                  and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg shadow-md p-6 text-center">
                <TrophyIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Best Event Planner of the Year
                </h3>
                <p className="text-muted-foreground">
                  Awarded by the Event Industry Association in 2021.
                </p>
              </div>
              <div className="bg-muted rounded-lg shadow-md p-6 text-center">
                <StarIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  5-Star Client Satisfaction
                </h3>
                <p className="text-muted-foreground">
                  Consistently rated 5 stars by our clients.
                </p>
              </div>
              <div className="bg-muted rounded-lg shadow-md p-6 text-center">
                <AwardIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Industry Innovation Award
                </h3>
                <p className="text-muted-foreground">
                  Recognized for our innovative event technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AwardIcon(props: any) {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function CalendarIcon(props: any) {
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
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TrophyIcon(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function WallpaperIcon(props: any) {
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
      <circle cx="8" cy="9" r="2" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}
