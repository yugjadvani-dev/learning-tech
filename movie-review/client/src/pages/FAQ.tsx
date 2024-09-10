import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export function FAQ() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full bg-muted rounded-md px-4 py-3 text-lg font-medium">
            How does the movie rating system work?
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted rounded-md px-4 py-3 text-muted-foreground">
            Our movie rating system is based on a 5-star scale, with 5 stars being the highest rating. Ratings are
            determined by a combination of critic reviews and user feedback. We take into account factors like plot,
            acting, cinematography, and overall entertainment value to provide a comprehensive rating for each movie.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full bg-muted rounded-md px-4 py-3 text-lg font-medium">
            How do I get movie recommendations?
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted rounded-md px-4 py-3 text-muted-foreground">
            We offer personalized movie recommendations based on your viewing history and preferences. Simply create an
            account, rate the movies you've seen, and our algorithm will suggest new titles you're likely to enjoy. You
            can also browse our curated lists of top-rated films in various genres and categories.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full bg-muted rounded-md px-4 py-3 text-lg font-medium">
            Can I leave my own movie reviews?
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted rounded-md px-4 py-3 text-muted-foreground">
            Absolutely! We encourage our users to share their thoughts and opinions on the movies they've watched. After
            signing in, you can leave a rating and a written review for any movie in our database. Your reviews will
            help other users make informed decisions and contribute to the overall quality of our rating system.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full bg-muted rounded-md px-4 py-3 text-lg font-medium">
            How do I report inappropriate content?
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted rounded-md px-4 py-3 text-muted-foreground">
            If you come across any content that you believe violates our community guidelines, such as offensive
            language, spoilers, or inaccurate information, please let us know. You can report the issue by clicking the
            "Report" button on the movie page or by contacting our customer support team. We take all reports seriously
            and will investigate the matter promptly.
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex justify-between items-center w-full bg-muted rounded-md px-4 py-3 text-lg font-medium">
            How can I become a verified critic?
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted rounded-md px-4 py-3 text-muted-foreground">
            To become a verified critic on our platform, you'll need to demonstrate your expertise and experience in
            film analysis. This typically involves submitting a portfolio of your previous movie reviews, along with
            proof of your credentials (e.g., a journalism degree, film school certification, or a track record of
            published reviews). Our editorial team will review your application and, if approved, you'll be granted the
            "Verified Critic" badge, which will lend more weight to your ratings and reviews.
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

function ChevronDownIcon(props:any) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
