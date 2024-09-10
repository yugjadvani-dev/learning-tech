import { Link } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            At our movie review website, we are committed to protecting the privacy and security of our users. This
            privacy policy explains how we collect, use, and safeguard your personal information.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Data Collection and Usage</h2>
          <p className="mt-4 text-muted-foreground">
            We collect certain personal information from you when you use our website, such as your name, email address,
            and any comments or reviews you submit. This information is used to provide you with our services, respond
            to your inquiries, and improve the overall user experience.
          </p>
          <p className="mt-4 text-muted-foreground">
            We may also collect non-personal information, such as your IP address, browser type, and device information,
            to analyze website usage and improve our services.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Data Storage and Security</h2>
          <p className="mt-4 text-muted-foreground">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or
            misuse. Your data is stored securely on our servers and is only accessible to authorized personnel.
          </p>
          <p className="mt-4 text-muted-foreground">
            We retain your personal information for as long as necessary to fulfill the purposes for which it was
            collected, or as required by law.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">User Rights</h2>
          <p className="mt-4 text-muted-foreground">
            You have the right to access, update, or delete your personal information at any time. You can also opt-out
            of receiving marketing communications from us.
          </p>
          <p className="mt-4 text-muted-foreground">
            If you have any concerns or questions about our privacy practices, please contact us at{" "}
            <Link to="#" className="underline">
              privacy@moviereview.com
            </Link>
            .
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Changes to this Policy</h2>
          <p className="mt-4 text-muted-foreground">
            We may update this privacy policy from time to time to reflect changes in our practices or applicable laws.
            We will notify you of any material changes by posting the updated policy on our website.
          </p>
        </div>
      </div>
    </div>
  )
}
