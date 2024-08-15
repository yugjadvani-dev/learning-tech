"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import useQuestion from "@/hooks/useQuestion";

export default function QuestionDetail({ params }: { params: { slug: string; }; }) {
  const { slug } = params;

  const questions = useQuestion()

  const filterData = questions.find((item) => item.id === slug)

  console.log("filterData", filterData)
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b">
          <h1 className="text-2xl font-bold">How do I create a React component?</h1>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <EyeIcon className="w-4 h-4 mr-1" />
              <span>1.2K views</span>
            </div>
            <div className="flex items-center ml-4">
              <MessageCircleIcon className="w-4 h-4 mr-1" />
              <span>42 answers</span>
            </div>
            <div className="flex items-center ml-4">
              <Avatar className="w-6 h-6 mr-2">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span>John Doe</span>
            </div>
            <div className="flex items-center ml-4">
              <ClockIcon className="w-4 h-4 mr-1" />
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-5">
          <p>
            I'm new to React and I'm trying to create my first component. Can someone please explain the steps to create
            a React component?
          </p>
        </div>
        <div className="px-6 py-5 border-t">
          <h2 className="text-xl font-bold mb-4">Comments</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Avatar className="w-8 h-8 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Jane Doe</span>
                  <span className="mx-2">·</span>
                  <span>1 hour ago</span>
                </div>
                <p className="mt-2">
                  To create a React component, you can use either a function or a class. Here's an example of a
                  functional component:
                </p>
                <pre className="bg-gray-100 rounded-lg p-4 mt-2">
                  <code>{`
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
                    `}</code>
                </pre>
              </div>
            </div>
            <div className="flex items-start">
              <Avatar className="w-8 h-8 mr-4">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <span>30 minutes ago</span>
                </div>
                <p className="mt-2">You can also create a component using a class:</p>
                <pre className="bg-gray-100 rounded-lg p-4 mt-2">
                  <code>{`
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}
                    `}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-5 border-t flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
              <ThumbsUpIcon className="w-5 h-5" />
            </Button>
            <span className="text-gray-500 ml-2">42</span>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 ml-4">
              <ThumbsDownIcon className="w-5 h-5" />
            </Button>
            <span className="text-gray-500 ml-2">12</span>
          </div>
          <Button size="sm">Answer Question</Button>
        </div>
      </div>
    </div>
  )
}

function ClockIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function EyeIcon(props:any) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ThumbsDownIcon(props:any) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props:any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}
