import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Varni Consultancy offers a wide range of government and
            administrative services to cater to all your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BadgeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Marriage Certificate</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in obtaining your marriage certificate from
                the relevant authorities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <StampIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Passport</h3>
              </div>
              <p className="text-muted-foreground">
                Let us guide you through the process of applying for or renewing
                your passport.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <DiscIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Driving License</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in obtaining or renewing your driving license.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <PinIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">PAN Card</h3>
              </div>
              <p className="text-muted-foreground">
                Let us help you apply for or update your Permanent Account
                Number (PAN) card.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <VoteIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Voter ID Card</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in obtaining or updating your Voter ID card.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <DiscIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  International Driving License
                </h3>
              </div>
              <p className="text-muted-foreground">
                Let us help you obtain your International Driving License for
                your travels abroad.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MoveIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  Vera Bill Name Transfer
                </h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in transferring the name on your Vera
                electricity bill.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MoveIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  Gujarat Gas Name Transfer
                </h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in transferring the name on your Gujarat Gas
                bill.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <MoveIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  Light Bill Name Transfer
                </h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in transferring the name on your electricity
                bill.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <FlagIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Revenue</h3>
              </div>
              <p className="text-muted-foreground">
                We can help you with various revenue-related services, such as
                property tax, land records, and more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">RTO</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you with all your RTO-related services, including
                vehicle registration, license renewals, and more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <InfoIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Insurance</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you with all your insurance-related services,
                including policy renewals, claims, and more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <VibrateIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Vima Policy</h3>
              </div>
              <p className="text-muted-foreground">
                We can help you with all your Vima policy-related services,
                including renewals and claims.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BookIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">RC Book</h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in obtaining or updating your vehicle's RC
                (Registration Certificate) book.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <BadgeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">
                  Aadhaar Card Address Updation
                </h3>
              </div>
              <p className="text-muted-foreground">
                We can assist you in updating your address on your Aadhaar card.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function BadgeIcon(props: any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CarIcon(props: any) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function DiscIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FlagIcon(props: any) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function InfoIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MoveIcon(props: any) {
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
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function PinIcon(props: any) {
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
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function StampIcon(props: any) {
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
      <path d="M5 22h14" />
      <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
    </svg>
  );
}

function VibrateIcon(props: any) {
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
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <rect width="8" height="14" x="8" y="5" rx="1" />
    </svg>
  );
}

function VoteIcon(props: any) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  );
}
