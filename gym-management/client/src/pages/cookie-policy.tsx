import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function CookiePolicy() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
          <p className="mt-2 text-muted-foreground">
            Learn how our Fitness Tracker app uses cookies and how you can
            manage your preferences.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">What are cookies?</h2>
          <p className="mt-2 text-muted-foreground">
            Cookies are small text files that are stored on your device when you
            visit a website or use an app. They help the website or app remember
            your actions and preferences, so you don't have to re-enter
            information every time you visit.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">How we use cookies</h2>
          <p className="mt-2 text-muted-foreground">
            Our Fitness Tracker app uses cookies to enhance your user experience
            and to improve the performance and functionality of the app. We use
            cookies to:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>- Remember your login information and preferences</li>
            <li>
              - Analyze how you use the app to improve its features and content
            </li>
            <li>- Provide you with personalized content and recommendations</li>
            <li>- Ensure the app is functioning correctly and securely</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Types of cookies used</h2>
          <p className="mt-2 text-muted-foreground">
            We use the following types of cookies in our Fitness Tracker app:
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-bold">Strictly Necessary Cookies</h3>
              <p className="mt-2 text-muted-foreground">
                These cookies are essential for the app to function properly.
                They allow you to navigate the app and use its basic features.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Functional Cookies</h3>
              <p className="mt-2 text-muted-foreground">
                These cookies help us remember your preferences and settings,
                such as your language or location, to provide a more
                personalized experience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Performance Cookies</h3>
              <p className="mt-2 text-muted-foreground">
                These cookies collect information about how you use the app,
                such as which features you use most often. This helps us improve
                the app's performance and functionality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">
                Targeting/Advertising Cookies
              </h3>
              <p className="mt-2 text-muted-foreground">
                These cookies are used to deliver advertisements that are more
                relevant to you and your interests. They also limit the number
                of times you see an ad and help us measure the effectiveness of
                our advertising campaigns.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Your cookie preferences</h2>
          <p className="mt-2 text-muted-foreground">
            You can manage your cookie preferences by adjusting the settings in
            your browser or by using the cookie consent manager in our app. You
            can choose to accept all cookies, reject all cookies, or only accept
            certain types of cookies.
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Strictly Necessary Cookies
                </h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies are essential for the app to function properly
                  and cannot be disabled.
                </p>
              </div>
              <Switch id="necessary" defaultChecked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Functional Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies help us remember your preferences and settings.
                </p>
              </div>
              <Switch id="functional" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Performance Cookies</h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies collect information about how you use the app to
                  improve its performance.
                </p>
              </div>
              <Switch id="performance" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">
                  Targeting/Advertising Cookies
                </h3>
                <p className="mt-2 text-muted-foreground">
                  These cookies are used to deliver personalized advertisements.
                </p>
              </div>
              <Switch id="advertising" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" className="w-full sm:w-auto">
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}