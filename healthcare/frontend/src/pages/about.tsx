import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Committed to Exceptional Healthcare
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  At Acme Healthcare, we are dedicated to providing our patients
                  with the highest quality medical care. Our experienced team of
                  healthcare professionals is committed to delivering
                  personalized, compassionate, and evidence-based treatments to
                  improve the well-being of our community.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our History
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Healthcare has been serving the community for over 50
                  years. We were founded in 1970 with the mission of providing
                  accessible and affordable healthcare to individuals and
                  families in our region. Over the decades, we have grown to
                  become a leading healthcare provider, continuously expanding
                  our services and facilities to meet the evolving needs of our
                  patients.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Experienced Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Acme Healthcare, we are proud to have a team of experienced
                  and highly skilled medical professionals. Our doctors, nurses,
                  and support staff are dedicated to providing personalized,
                  compassionate care to every patient who walks through our
                  doors. With a combined expertise of over 200 years, our team
                  is committed to delivering the best possible outcomes for our
                  patients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. Emily Roberts</h3>
                  <p className="text-muted-foreground">Cardiologist</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. John Doe</h3>
                  <p className="text-muted-foreground">Orthopedic Surgeon</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Dr. Sarah Adams</h3>
                  <p className="text-muted-foreground">Family Medicine</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Healthcare offers a comprehensive range of medical
                  services to meet the diverse needs of our patients. From
                  primary care and preventive medicine to specialized treatments
                  and advanced procedures, our team of healthcare professionals
                  is equipped to provide the highest quality care in a wide
                  variety of medical disciplines.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <HeartPulseIcon className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Cardiology</h3>
                  <p className="text-muted-foreground">
                    Comprehensive heart health services, including diagnostics,
                    treatment, and rehabilitation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <MicroscopeIcon className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Diagnostics</h3>
                  <p className="text-muted-foreground">
                    Advanced imaging and laboratory services for accurate
                    diagnosis and monitoring.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <LigatureIcon className="h-12 w-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Orthopedics</h3>
                  <p className="text-muted-foreground">
                    Specialized care for injuries and conditions affecting the
                    musculoskeletal system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Awards and Certifications
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Healthcare is proud to have received numerous awards and
                  certifications recognizing our commitment to excellence in
                  patient care and our dedication to continuous improvement.
                  These accolades are a testament to the hard work and expertise
                  of our team, and they reflect our unwavering dedication to
                  providing the best possible healthcare experience for our
                  patients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/certificate-1.jpg"
                  width="140"
                  height="70"
                  alt="Award"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">
                    Joint Commission Accreditation
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized for excellence in patient safety and quality of
                    care.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/cartificare-2.jpg"
                  width="140"
                  height="70"
                  alt="Award"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">
                    Magnet Recognition Program
                  </h3>
                  <p className="text-muted-foreground">
                    Awarded for exceptional nursing care and patient outcomes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/cartificate-3.jpg"
                  width="140"
                  height="70"
                  alt="Award"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">
                    Patient-Centered Medical Home
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized for providing coordinated, comprehensive primary
                    care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
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

function LigatureIcon(props: any) {
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
      <path d="M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" />
      <path d="M6 12h4" />
      <path d="M14 12h2v8" />
      <path d="M6 20h4" />
      <path d="M14 20h4" />
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
