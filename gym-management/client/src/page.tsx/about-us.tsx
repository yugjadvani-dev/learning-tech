export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  About Our Fitness Tracker
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our Fitness Tracker app is designed to help you achieve your
                  health and fitness goals. With features like activity
                  tracking, personalized workout plans, and progress monitoring,
                  we're here to support you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Founders and Mission
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app was founded by a team of passionate fitness
                  enthusiasts who believe that everyone should have access to
                  the tools and support they need to live a healthy, active
                  lifestyle. Our mission is to empower our users to take control
                  of their health and wellness, one step at a time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <UserIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">John Doe</h3>
                <p className="text-muted-foreground">
                  Co-founder and CEO, responsible for the overall vision and
                  strategy of the app.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <UserIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">
                  Co-founder and CTO, leading the technical development and
                  innovation of the app.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <UserIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Michael Johnson</h3>
                <p className="text-muted-foreground">
                  Co-founder and COO, responsible for operations, marketing, and
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our App\'s History and Development
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Fitness Tracker app was born out of our founders' personal
                  struggles with maintaining a healthy lifestyle. After trying
                  countless fitness apps and devices, they realized that there
                  was a need for a more comprehensive and user-friendly
                  solution. Over the past 5 years, we've meticulously designed
                  and developed the app, incorporating feedback from our growing
                  community of users to ensure that it meets their evolving
                  needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <CalendarIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">2018</h3>
                <p className="text-muted-foreground">
                  The idea for the Fitness Tracker app was conceived, and the
                  initial development phase began.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <RocketIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">2020</h3>
                <p className="text-muted-foreground">
                  The app was launched on the App Store and Google Play, quickly
                  gaining a loyal user base.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <AwardIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">2022</h3>
                <p className="text-muted-foreground">
                  The app was recognized as the "Best Fitness App of the Year"
                  by a leading industry publication.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Core Values and Principles
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At the heart of our Fitness Tracker app are a set of core
                  values and principles that guide our design and development
                  decisions. We believe in empowering our users, promoting
                  sustainable habits, and fostering a supportive community.
                  These principles are woven into every aspect of the app, from
                  the user interface to the personalized workout plans.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <PowerIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in giving our users the tools and support they need
                  to take control of their health and fitness journey.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <RecycleIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We promote the development of healthy, long-term habits that
                  can be easily integrated into our users' daily lives.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center text-primary-foreground">
                  <GroupIcon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-bold">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive and inclusive community where our users
                  can share their progress, challenges, and successes.
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

function GroupIcon(props: any) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function PowerIcon(props: any) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function RecycleIcon(props: any) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}

function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
