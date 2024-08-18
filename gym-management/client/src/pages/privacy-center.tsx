import { Link } from "react-router-dom";

export function PrivacyCenter() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Privacy Center
          </h1>
          <p className="mt-4 text-muted-foreground">
            At our Fitness Tracker app, we take your privacy seriously. This
            Privacy Center provides you with information about how we collect,
            use, and protect your personal data.
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Data Collection</h2>
            <p className="mt-2 text-muted-foreground">
              We collect various types of data to provide you with our Fitness
              Tracker services, including your fitness activity, location, and
              personal information. We are committed to collecting only the data
              necessary to deliver our services and improve your experience.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center font-medium text-primary hover:underline"
            >
              Learn more about data collection
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Data Usage</h2>
            <p className="mt-2 text-muted-foreground">
              We use the data we collect to provide you with personalized
              fitness insights, recommendations, and to improve our services. We
              do not sell or share your data with third parties for marketing
              purposes without your consent.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center font-medium text-primary hover:underline"
            >
              Learn more about data usage
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Data Sharing</h2>
            <p className="mt-2 text-muted-foreground">
              We may share your data with third-party service providers who help
              us operate and improve our Fitness Tracker app. These providers
              are contractually obligated to protect your data and use it only
              for the purposes we specify.
            </p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center font-medium text-primary hover:underline"
            >
              Learn more about data sharing
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">User Rights</h2>
            <p className="mt-2 text-muted-foreground">
              You have the right to access, update, and delete your personal
              data. You can also opt-out of certain data collection and sharing
              practices. If you have any questions or concerns, please don't
              hesitate to contact our privacy team.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Learn more about user rights
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Contact privacy team
                <MailIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
