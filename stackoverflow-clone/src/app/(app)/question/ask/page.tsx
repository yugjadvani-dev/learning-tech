import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Ask() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div>
        <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-muted-foreground">
              Title
            </label>
            <Input id="title" placeholder="Enter a clear and concise title for your question" />
          </div>
          <div>
            <label htmlFor="problem" className="block text-sm font-medium text-muted-foreground">
              What are the details of your problem?
            </label>
            <Textarea id="problem" rows={5} placeholder="Describe the problem you're facing in detail" />
          </div>
          <div>
            <label htmlFor="attempts" className="block text-sm font-medium text-muted-foreground">
              What did you try and what were you expecting?
            </label>
            <Textarea
              id="attempts"
              rows={5}
              placeholder="Explain what you've already tried and what you expected to happen"
            />
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-muted-foreground">
              Tags
            </label>
            <div />
          </div>
          <div>
            <Link href="#" className="inline-flex items-center text-primary hover:underline" prefetch={false}>
              <SearchIcon className="w-4 h-4 mr-2" />
              Review questions already on Stack Overflow to see if your question is a duplicate
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Post Your Question
          </Button>
        </form>
      </div>
      <div className="bg-muted rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-2">Tips for Asking Good Questions</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>Be clear and specific</strong> - Provide detailed information about your problem, including any
              error messages or unexpected behavior.
            </li>
            <li>
              <strong>Do your research</strong> - Check if your question has already been answered on the site before
              posting.
            </li>
            <li>
              <strong>Use relevant tags</strong> - Add tags that accurately describe your question and the technologies
              involved.
            </li>
            <li>
              <strong>Format your code</strong> - Use code blocks to make your code easy to read and understand.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-medium mb-2">Related Questions</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                How do I fix a NullReferenceException in C#?
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                What is the difference between let and var in JavaScript?
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                How do I implement a custom sorting algorithm in Python?
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="#" className="inline-flex items-center text-primary hover:underline" prefetch={false}>
            <FolderIcon className="w-4 h-4 mr-2" />
            Browse the Question Archive
          </Link>
        </div>
      </div>
    </div>
  )
}

function FolderIcon(props:any) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}


function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
