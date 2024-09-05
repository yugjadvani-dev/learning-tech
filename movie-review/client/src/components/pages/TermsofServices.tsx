import { Link } from "lucide-react"

export function TermsofServices() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">
            Welcome to our movie rating website. By using our services, you agree to these terms and conditions.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">User Conduct</h2>
            <p className="mt-2 text-muted-foreground">
              Our platform is designed to be a safe and respectful environment. You agree to use our services in a
              lawful and ethical manner, and to refrain from any behavior that may disrupt or interfere with the use of
              our website by others.
            </p>
            <Link to="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
              Read more <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Content Guidelines</h2>
            <p className="mt-2 text-muted-foreground">
              We have established guidelines for the content you can post on our website. This includes restrictions on
              inappropriate, offensive, or copyrighted material.
            </p>
            <Link to="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
              Read more <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Privacy</h2>
            <p className="mt-2 text-muted-foreground">
              We take the privacy of our users seriously. Our privacy policy outlines how we collect, use, and protect
              your personal information.
            </p>
            <Link to="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
              Read more <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Intellectual Property</h2>
            <p className="mt-2 text-muted-foreground">
              All content and materials on our website are owned by us or our licensors. You agree to respect our
              intellectual property rights and not to use our content without permission.
            </p>
            <Link to="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
              Read more <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Dispute Resolution</h2>
            <p className="mt-2 text-muted-foreground">
              In the event of any disputes or issues that arise from your use of our services, we have established a
              process for resolving them.
            </p>
            <Link to="#" className="mt-2 inline-flex items-center gap-1 font-medium hover:underline">
              Read more <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
