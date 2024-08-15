"use client";

export default function Privacy() {
    return (
      <div className="container mx-auto max-w-3xl py-12 px-4 md:px-0">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            At Acme Inc., we are committed to protecting the privacy and security of your personal information. This
            privacy policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Data Collection</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>
                  We collect personal information such as your name, email address, and contact details when you sign up
                  for our services.
                </li>
                <li>
                  We may also collect information about your usage of our website and services, including your IP address,
                  browser type, and device information.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Data Usage</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>
                  We use your personal information to provide and improve our services, communicate with you, and respond
                  to your inquiries.
                </li>
                <li>
                  We may also use your information for marketing and personalization purposes, but we will always obtain
                  your consent before doing so.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Data Sharing</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>
                  We may share your personal information with third-party service providers who assist us in operating our
                  business, but we ensure that they maintain the same level of privacy and security as we do.
                </li>
                <li>
                  We will never sell or rent your personal information to any third party without your explicit consent.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Data Storage and Security</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>
                  We store your personal information securely and take appropriate measures to protect it from
                  unauthorized access, modification, or disclosure.
                </li>
                <li>
                  We retain your personal information for as long as necessary to fulfill the purposes for which it was
                  collected, or as required by law.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Your Rights</h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                <li>You have the right to access, correct, or delete your personal information at any time.</li>
                <li>
                  You can also opt-out of receiving marketing communications from us by contacting us at privacy@acme.com.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Changes to this Policy</h2>
              <p className="mt-2 text-muted-foreground">
                We may update this privacy policy from time to time to reflect changes in our practices or applicable
                laws. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                If you have any questions or concerns about our privacy practices, please contact us at privacy@acme.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }