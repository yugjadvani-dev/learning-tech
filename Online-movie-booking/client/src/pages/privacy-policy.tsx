import { Link } from "lucide-react";


export function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-0">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Effective Date: October 10, 2024</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-2 text-muted-foreground">
            At Acme Inc., we are committed to protecting the privacy and security of your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when you use our
            website and services.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Data Collection</h2>
          <p className="mt-2 text-muted-foreground">
            We may collect the following types of personal information from you:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Contact information, such as your name, email address, and phone number.</li>
            <li>Demographic information, such as your age, gender, and location.</li>
            <li>
              Usage data, such as the pages you visit on our website, the Links you click, and the search queries you
              make.
            </li>
            <li>
              Payment information, such as your credit card number and billing address, if you make a purchase through
              our website.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Data Usage</h2>
          <p className="mt-2 text-muted-foreground">We use the personal information we collect to:</p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Provide and improve our products and services, including responding to your inquiries and requests.</li>
            <li>Personalize your experience on our website and tailor our content and offerings to your interests.</li>
            <li>Communicate with you about our products, services, and promotions.</li>
            <li>Analyze usage trends and preferences to enhance the overall user experience.</li>
            <li>Comply with legal and regulatory requirements, and protect our rights and the rights of our users.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">User Rights</h2>
          <p className="mt-2 text-muted-foreground">
            We respect your privacy and provide you with the following rights:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Access: You have the right to access the personal information we hold about you.</li>
            <li>
              Correction: You have the right to correct any inaccurate or incomplete personal information we hold about
              you.
            </li>
            <li>
              Deletion: You have the right to request the deletion of your personal information, subject to certain
              exceptions.
            </li>
            <li>
              Opt-out: You have the right to opt-out of certain data processing activities, such as marketing
              communications.
            </li>
            <li>
              Portability: You have the right to request a copy of your personal information in a structured, commonly
              used, and machine-readable format.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-muted-foreground">
            If you have any questions or concerns about our Privacy Policy or the way we handle your personal
            information, please contact us at
            <Link to="#" className="text-primary">
              privacy@acme.com
            </Link>
            .
          </p>
        </div>
        <div className="flex justify-end text-muted-foreground">Last updated: October 10, 2024</div>
      </div>
    </div>
  )
}