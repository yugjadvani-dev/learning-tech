import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-primary to-secondary py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
            Exceptional Healthcare Services
          </h1>
          <p className="mt-4 text-lg text-primary-foreground md:text-xl">
            Experience the best in medical care with our comprehensive range of
            services.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Explore our wide range of healthcare services.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <HeartPulseIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Cardiology</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive heart health services, including diagnostics,
                treatments, and preventive care.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <TreesIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Pulmonology</h3>
              <p className="mt-2 text-muted-foreground">
                Expert care for respiratory conditions, including asthma, COPD,
                and lung cancer.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <BrainIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Neurology</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive care for neurological conditions, including
                headaches, strokes, and Alzheimer's.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <BoneIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Orthopedics</h3>
              <p className="mt-2 text-muted-foreground">
                Expert care for musculoskeletal conditions, including joint
                replacement, sports injuries, and spine care.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <MicroscopeIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Laboratory</h3>
              <p className="mt-2 text-muted-foreground">
                Comprehensive laboratory services, including diagnostic testing,
                pathology, and personalized medicine.
              </p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <AmbulanceIcon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Emergency Care</h3>
              <p className="mt-2 text-muted-foreground">
                24/7 emergency services, including a fully equipped ER and
                trauma center.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-secondary md:text-4xl">
              Trusted and Accredited
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Our healthcare system is recognized for its excellence and
              commitment to patient care.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex items-center justify-center">
              <img
                src="/health-1.jpg"
                alt="JCAHO Accredited"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/health-2.jpg"
                alt="Magnet Recognized"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/health-3.jpg"
                alt="U.S. News & World Report"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/health-4.jpg"
                alt="The Leapfrog Group"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/health-5.jpg"
                alt="American Heart Association"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/health-6.jpg"
                alt="Centers for Medicare & Medicaid Services"
                width={100}
                height={100}
                className="h-12 w-auto"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AmbulanceIcon(props: any) {
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
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
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

function HeartPulseIcon(props: any) {
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
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}

function MicroscopeIcon(props: any) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
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