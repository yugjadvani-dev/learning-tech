"use client"

import { SetStateAction, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Pagination } from "@/components/ui/pagination"

export default function Tags() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [tagsPerPage, setTagsPerPage] = useState(12)
  const tags = [
    {
      id: 1,
      name: "javascript",
      questionCount: 1234567,
      description:
        "For questions about the JavaScript programming language, including syntax, debugging, and language APIs.",
    },
    {
      id: 2,
      name: "python",
      questionCount: 987654,
      description: "For questions about the Python programming language, including syntax, libraries, and frameworks.",
    },
    {
      id: 3,
      name: "java",
      questionCount: 876543,
      description: "For questions about the Java programming language, including syntax, libraries, and frameworks.",
    },
    {
      id: 4,
      name: "c#",
      questionCount: 765432,
      description: "For questions about the C# programming language, including syntax, libraries, and frameworks.",
    },
    {
      id: 5,
      name: "php",
      questionCount: 654321,
      description: "For questions about the PHP programming language, including syntax, libraries, and frameworks.",
    },
    {
      id: 6,
      name: "react",
      questionCount: 543210,
      description:
        "For questions about the React JavaScript library, including components, state management, and rendering.",
    },
    {
      id: 7,
      name: "sql",
      questionCount: 432109,
      description:
        "For questions about Structured Query Language (SQL), including database design, queries, and optimization.",
    },
    {
      id: 8,
      name: "html",
      questionCount: 321098,
      description:
        "For questions about the HyperText Markup Language (HTML), including syntax, structure, and semantics.",
    },
    {
      id: 9,
      name: "css",
      questionCount: 210987,
      description:
        "For questions about Cascading Style Sheets (CSS), including layout, styling, and responsive design.",
    },
    {
      id: 10,
      name: "node.js",
      questionCount: 109876,
      description:
        "For questions about the Node.js JavaScript runtime, including server-side development, modules, and asynchronous programming.",
    },
    {
      id: 11,
      name: "angular",
      questionCount: 98765,
      description:
        "For questions about the Angular web application framework, including components, services, and routing.",
    },
    {
      id: 12,
      name: "ruby",
      questionCount: 87654,
      description: "For questions about the Ruby programming language, including syntax, libraries, and frameworks.",
    },
    {
      id: 13,
      name: "swift",
      questionCount: 76543,
      description: "For questions about the Swift programming language, including iOS and macOS development.",
    },
    {
      id: 14,
      name: "kotlin",
      questionCount: 65432,
      description:
        "For questions about the Kotlin programming language, including Android development and interoperability with Java.",
    },
    {
      id: 15,
      name: "go",
      questionCount: 54321,
      description:
        "For questions about the Go programming language, including concurrency, performance, and system programming.",
    },
    {
      id: 16,
      name: "rust",
      questionCount: 43210,
      description:
        "For questions about the Rust programming language, including memory safety, concurrency, and systems programming.",
    },
  ]
  const filteredTags = tags.filter((tag) => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
  const indexOfLastTag = currentPage * tagsPerPage
  const indexOfFirstTag = indexOfLastTag - tagsPerPage
  const currentTags = filteredTags.slice(indexOfFirstTag, indexOfLastTag)
  const totalPages = Math.ceil(filteredTags.length / tagsPerPage)
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search for tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentTags.map((tag) => (
          <Card key={tag.id} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-bold">{tag.name}</CardTitle>
              <CardDescription className="text-gray-500">{tag.questionCount} questions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{tag.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}
