import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                About Our Movie Review Website
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Welcome to our movie review website, where we passionately explore the world of cinema. Our team of
                dedicated film enthusiasts is committed to providing you with insightful reviews, thought-provoking
                analysis, and a deep appreciation for the art of storytelling.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our mission is to inspire and educate our readers, fostering a deeper understanding and appreciation for
                the cinematic medium. We believe that movies have the power to evoke emotions, challenge perspectives,
                and shape our collective cultural landscape.
              </p>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Values</div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Integrity, objectivity, and a genuine passion for film are the core values that guide our work. We
                strive to provide unbiased, well-researched reviews that help our readers make informed decisions about
                the movies they choose to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of movie enthusiasts brings a diverse range of expertise and perspectives to our reviews and
                analysis.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Editor-in-Chief</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                John is a seasoned film critic with over a decade of experience. He is passionate about exploring the
                artistic and cultural impact of cinema.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Jane Arden</h3>
                  <p className="text-sm text-muted-foreground">Senior Critic</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Jane is a passionate cinephile with a deep understanding of film history and theory. She brings a unique
                perspective to her reviews.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Michael Smith</h3>
                  <p className="text-sm text-muted-foreground">Staff Writer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Michael is a rising talent in the world of film criticism. He brings a fresh perspective and a keen eye
                for detail to his reviews.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Sarah Ahn</h3>
                  <p className="text-sm text-muted-foreground">Staff Writer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Sarah is a passionate cinephile with a deep understanding of international cinema. She brings a global
                perspective to her reviews.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>LW</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Lily Wang</h3>
                  <p className="text-sm text-muted-foreground">Multimedia Producer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Lily is a talented multimedia producer who brings our reviews to life through engaging videos and
                visuals. She has a keen eye for storytelling.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Ryan Bauer</h3>
                  <p className="text-sm text-muted-foreground">Social Media Manager</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ryan is our social media expert, connecting our readers with the latest news, reviews, and discussions
                in the world of cinema.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
