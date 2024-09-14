export function AccessibilityStatement() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-muted-foreground">
            At our learning management system, we are committed to providing an
            inclusive and accessible digital experience for all our users,
            including students, instructors, and administrators.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Accessibility Standards and Guidelines
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our learning management system is designed to conform to the latest
            Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. We
            strive to ensure that our platform is accessible and usable by
            individuals with a wide range of abilities and disabilities.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Accessibility Features
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <h3 className="font-medium">
                Screen Reader and Assistive Technology Support
              </h3>
              <p>
                Our platform is designed to work seamlessly with popular screen
                readers and other assistive technologies.
              </p>
            </li>
            <li>
              <h3 className="font-medium">Keyboard Navigation</h3>
              <p>
                All functionality in our system can be accessed using a
                keyboard, without the need for a mouse.
              </p>
            </li>
            <li>
              <h3 className="font-medium">High-Contrast Mode</h3>
              <p>
                Users can enable a high-contrast mode to improve readability and
                visibility for those with visual impairments.
              </p>
            </li>
            <li>
              <h3 className="font-medium">Text Resizing and Adjustment</h3>
              <p>
                Our platform allows users to resize text and adjust font sizes
                to suit their preferences and needs.
              </p>
            </li>
            <li>
              <h3 className="font-medium">Captions and Transcripts</h3>
              <p>
                All multimedia content, such as videos and audio recordings, are
                provided with captions and transcripts to ensure accessibility.
              </p>
            </li>
            <li>
              <h3 className="font-medium">Accessible Forms and Data Tables</h3>
              <p>
                Our forms and data tables are designed to be easily navigable
                and understandable for users with disabilities.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Feedback and Support
          </h2>
          <p className="mt-4 text-muted-foreground">
            We welcome feedback from our users on the accessibility of our
            learning management system. If you encounter any accessibility
            issues or require accommodations, please don't hesitate to contact
            our accessibility support team at{" "}
            <a href="#" className="underline">
              accessibility@example.com
            </a>
            . We are committed to addressing your concerns and ensuring an
            inclusive experience for all.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Continuous Improvement
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are dedicated to continuously monitoring, testing, and improving
            the accessibility of our learning management system. As
            accessibility standards and user needs evolve, we will regularly
            review and update our platform to ensure it remains inclusive and
            accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
}
