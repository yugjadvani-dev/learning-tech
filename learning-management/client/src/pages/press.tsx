import { Button } from "@/components/ui/button";

export function Press() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="bg-muted rounded-lg p-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
              <p className="text-muted-foreground">
                We are a leading provider of innovative learning management
                solutions, dedicated to empowering educators and transforming
                the way people learn. Our mission is to create engaging and
                accessible educational experiences that inspire lifelong
                learning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li>
                  <h4 className="font-medium">Intuitive Interface</h4>
                  <p className="text-muted-foreground">
                    Our user-friendly platform makes it easy for educators and
                    learners to navigate and access all the tools they need.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Robust Collaboration</h4>
                  <p className="text-muted-foreground">
                    Seamless communication and collaboration features enable
                    effective teamwork and engagement.
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Personalized Learning</h4>
                  <p className="text-muted-foreground">
                    Customizable learning paths and adaptive content ensure each
                    learner receives a tailored educational experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
          <div className="grid gap-6">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Announcing the Launch of Our New Learning Platform
              </h3>
              <p className="text-muted-foreground mb-4">June 1, 2023</p>
              <p>
                We are thrilled to announce the launch of our new cutting-edge
                learning management system, designed to revolutionize the way
                educators and learners engage with educational content.
              </p>
              <Button variant="link" className="mt-4">
                Read More
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Our Company Wins Best LMS Award at Industry Conference
              </h3>
              <p className="text-muted-foreground mb-4">April 15, 2023</p>
              <p>
                We are proud to announce that our learning management system has
                been recognized as the Best LMS at the prestigious industry
                conference, solidifying our position as a leader in the field of
                educational technology.
              </p>
              <Button variant="link" className="mt-4">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
          <div className="grid gap-6">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                Our LMS Featured in EdTech Magazine
              </h3>
              <p className="text-muted-foreground mb-2">
                EdTech Magazine, June 2023
              </p>
              <p>
                "The intuitive interface and powerful collaboration features\n
                of this learning management system make it a game-changer in\n
                the world of online education."
              </p>
              <Button variant="link" className="mt-4">
                Read Article
              </Button>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
                CEO Interview on Edtech Podcast
              </h3>
              <p className="text-muted-foreground mb-2">
                Edtech Podcast, April 2023
              </p>
              <p>
                "Our mission is to create learning experiences that inspire\n
                and empower both educators and students. We're excited to\n
                share our vision for the future of education technology."
              </p>
              <Button variant="link" className="mt-4">
                Listen to Podcast
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Media Kit</h2>
          <div className="bg-muted rounded-lg p-8">
            <p className="text-muted-foreground mb-4">
              Download our media kit to access our company logo, product
              screenshots, and other assets for your media coverage.
            </p>
            <Button>Download Media Kit</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="bg-muted rounded-lg p-8">
            <p className="text-muted-foreground mb-4">
              For any media inquiries or interview requests, please contact our
              press team:
            </p>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium">Press Contact</h4>
                <p>press@ourcompany.com</p>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
