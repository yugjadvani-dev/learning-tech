import { Button } from "@/components/ui/button";

export function Integration() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          Integrations
        </h1>
        <p className="text-muted-foreground max-w-[800px] mx-auto">
          Seamlessly connect your fitness tracker with your favorite apps and
          devices to get a comprehensive view of your health and wellness.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <FingerprintIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Fitbit</h3>
          <p className="text-muted-foreground mb-4">
            Sync your Fitbit data to get a complete picture of your fitness and
            activity.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <WatchIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Apple Watch</h3>
          <p className="text-muted-foreground mb-4">
            Integrate your Apple Watch data to track your workouts and activity.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <BikeIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Strava</h3>
          <p className="text-muted-foreground mb-4">
            Sync your Strava activities to track your progress and share with
            friends.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <WeightIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">MyFitnessPal</h3>
          <p className="text-muted-foreground mb-4">
            Connect your MyFitnessPal account to log your nutrition and
            calories.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <BarcodeIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Garmin</h3>
          <p className="text-muted-foreground mb-4">
            Sync your Garmin device data to get a comprehensive view of your
            fitness.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <FingerprintIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Google Fit</h3>
          <p className="text-muted-foreground mb-4">
            Integrate your Google Fit data to track your activity and health
            metrics.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <WatchIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Withings</h3>
          <p className="text-muted-foreground mb-4">
            Connect your Withings devices to monitor your weight, sleep, and
            more.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
        <div className="bg-background rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center h-16 mb-4">
            <SmartphoneIcon className="w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Samsung Health</h3>
          <p className="text-muted-foreground mb-4">
            Integrate your Samsung Health data to track your overall health and
            wellness.
          </p>
          <Button className="w-full">Connect</Button>
        </div>
      </div>
    </div>
  );
}

function BarcodeIcon(props: any) {
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
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  );
}

function BikeIcon(props: any) {
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
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

function FingerprintIcon(props: any) {
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
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  );
}

function SmartphoneIcon(props: any) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function WatchIcon(props: any) {
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
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  );
}

function WeightIcon(props: any) {
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
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>
  );
}
