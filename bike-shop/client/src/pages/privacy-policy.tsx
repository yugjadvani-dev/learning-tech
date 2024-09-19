import { Link } from "react-router-dom"

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link to="/" className="flex items-center justify-center">
          <BikeIcon className="h-6 w-6" />
          <span className="sr-only">Acme Bikes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Bikes
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Accessories
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
                <p className="text-muted-foreground">Effective Date: September 17, 2024</p>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Data Collection and Usage</h2>
                  <p className="text-muted-foreground">
                    At Acme Bikes, we are committed to protecting the privacy of our customers. We collect certain
                    personal information from you when you visit our website, make a purchase, or interact with us in
                    other ways. This information may include your name, email address, shipping address, payment
                    information, and any other information you provide to us.
                  </p>
                  <p className="text-muted-foreground">
                    We use this information to process your orders, provide customer support, improve our products and
                    services, and communicate with you about our offerings. We may also use your information for
                    marketing purposes, such as sending you promotional emails or newsletters, but you can opt out of
                    these communications at any time.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Data Protection and Security</h2>
                  <p className="text-muted-foreground">
                    We take the security of your personal information very seriously. We use industry-standard
                    encryption and other security measures to protect your data from unauthorized access, use, or
                    disclosure. We also limit access to your personal information to only those employees and third
                    parties who need it to perform their duties.
                  </p>
                  <p className="text-muted-foreground">
                    In the event of a data breach, we will notify you and relevant authorities as required by law.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Cookies and Tracking</h2>
                  <p className="text-muted-foreground">
                    We use cookies and other tracking technologies to improve your experience on our website and to
                    better understand how you use our services. These technologies may collect information about your
                    device, your browsing history, and your interactions with our website.
                  </p>
                  <p className="text-muted-foreground">
                    You can manage your cookie preferences by adjusting your browser settings. However, please note that
                    disabling cookies may affect the functionality of our website.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Access, Update, and Deletion of Personal Data</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, update, and delete your personal data at any time. To do so, please
                    contact our customer support team at support@acmebikes.com or by phone at 1-888-888-8888.
                  </p>
                  <p className="text-muted-foreground">
                    We will respond to your request within 30 days and provide you with the information or take the
                    action you have requested, unless we are legally required to maintain the data.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Changes to this Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time to reflect changes in our data practices or
                    legal requirements. We will notify you of any material changes by posting the updated policy on our
                    website or by sending you an email.
                  </p>
                  <p className="text-muted-foreground">
                    If you have any questions or concerns about our Privacy Policy, please contact us at
                    privacy@acmebikes.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Bikes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link to="/" className="text-xs hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BikeIcon(props:any) {
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
  )
}
