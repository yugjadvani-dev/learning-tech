import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SuccessStories() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Inspiring Stories from Our Fitness Tracker Users
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from real people who have transformed their lives with the
              help of our Fitness Tracker app.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Sarah Johnson</div>
              <div className="text-muted-foreground">
                "The Fitness Tracker app has been a game-changer for me. I've
                lost 25 pounds and feel healthier than ever. The app's
                personalized workout plans and progress tracking features have
                been essential to my success."
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Michael Lee</div>
              <div className="text-muted-foreground">
                "I was struggling to stay motivated with my fitness routine
                until I started using the Fitness Tracker app. The app's
                challenges and social features have kept me engaged and
                accountable. I've already hit my weight loss goal and feel
                better than ever."
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Emily Chen</div>
              <div className="text-muted-foreground">
                "I was hesitant to try the Fitness Tracker app at first, but it
                has completely transformed my fitness journey. The app's
                personalized workout plans and nutrition guidance have helped me
                build healthy habits that I can stick to. I've never felt
                better!"
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">David Patel</div>
              <div className="text-muted-foreground">
                "I've tried countless fitness apps, but the Fitness Tracker app
                is the only one that has truly helped me achieve my goals. The
                app's detailed progress tracking and personalized coaching have
                been invaluable. I'm stronger and healthier than I've been in
                years."
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Jessica Hernandez</div>
              <div className="text-muted-foreground">
                "I was hesitant to try the Fitness Tracker app at first, but it
                has completely transformed my fitness journey. The app's
                personalized workout plans and nutrition guidance have helped me
                build healthy habits that I can stick to. I've never felt
                better!"
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm">
            <Avatar className="w-16 h-16 border">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
              <div className="text-lg font-semibold">Alex Nguyen</div>
              <div className="text-muted-foreground">
                "I've tried countless fitness apps, but the Fitness Tracker app
                is the only one that has truly helped me achieve my goals. The
                app's detailed progress tracking and personalized coaching have
                been invaluable. I'm stronger and healthier than I've been in
                years."
              </div>
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
