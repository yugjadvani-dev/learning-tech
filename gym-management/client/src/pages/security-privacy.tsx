export function SecurityPrivacy() {
  return (
    <div className="bg-background text-foreground">
      <section className="container mx-auto py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Security &amp; Privacy</h1>
          <p className="text-muted-foreground text-lg mb-8">
            At our fitness tracker app, we take the security and privacy of your
            data seriously. We've implemented robust measures to ensure your
            personal information and activity data are protected at all times.
          </p>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Privacy</h2>
              <p className="text-muted-foreground mb-4">
                We understand the sensitive nature of your fitness data and are
                committed to keeping it private. We do not share or sell your
                information to any third parties without your explicit consent.
                All data is stored securely and access is restricted to
                authorized personnel only.
              </p>
              <p className="text-muted-foreground">
                You have full control over your data and can download or delete
                it at any time. We also provide detailed privacy settings to
                help you manage what information is shared.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Encryption</h2>
              <p className="text-muted-foreground mb-4">
                All data transmitted between your device and our servers is
                encrypted using the latest industry-standard protocols, such as
                AES-256 and TLS 1.3. This ensures that your information remains
                confidential and protected from unauthorized access.
              </p>
              <p className="text-muted-foreground">
                We also encrypt data at rest on our servers to further safeguard
                your personal details and activity records.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Authentication</h2>
              <p className="text-muted-foreground mb-4">
                To access your account, we require strong authentication
                measures, including password requirements, two-factor
                authentication, and biometric login options (where available).
                These steps help prevent unauthorized access and protect your
                account from potential breaches.
              </p>
              <p className="text-muted-foreground">
                We also regularly monitor for suspicious activity and will
                notify you immediately if we detect any unusual login attempts
                or other security concerns.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Security Updates</h2>
              <p className="text-muted-foreground mb-4">
                We are committed to maintaining the highest levels of security
                for our platform. Our team of security experts continuously
                monitors for new threats and vulnerabilities, and we promptly
                deploy security updates and patches to ensure your data remains
                protected.
              </p>
              <p className="text-muted-foreground">
                We encourage you to keep your app and device software up to date
                to benefit from the latest security improvements and bug fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}