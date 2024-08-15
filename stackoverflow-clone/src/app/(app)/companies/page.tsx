"use client"

import { SetStateAction, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Pagination } from "@/components/ui/pagination"

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(12)
  const companies = [
    {
      id: 1,
      name: "Acme Inc.",
      industry: "Technology",
      founded: 1995,
      employees: 1500,
      revenue: "$250M",
      website: "www.acme.com",
      description:
        "Acme Inc. is a leading technology company that specializes in developing innovative software solutions for businesses of all sizes. With a focus on cutting-edge technology and a commitment to customer satisfaction, Acme has become a trusted partner for organizations around the world.",
    },
    {
      id: 2,
      name: "Globex Corporation",
      industry: "Manufacturing",
      founded: 1975,
      employees: 2800,
      revenue: "$500M",
      website: "www.globex.com",
      description:
        "Globex Corporation is a diversified manufacturing company that produces a wide range of products, from industrial machinery to consumer electronics. With a strong focus on quality and efficiency, Globex has established itself as a leader in its industry, known for its innovative approach and commitment to sustainable practices.",
    },
    {
      id: 3,
      name: "Stark Industries",
      industry: "Aerospace",
      founded: 1939,
      employees: 3200,
      revenue: "$800M",
      website: "www.starkindustries.com",
      description:
        "Stark Industries is a renowned aerospace and defense company that has been at the forefront of technological innovation for decades. With a team of highly skilled engineers and researchers, Stark Industries develops cutting-edge products and solutions that are used by governments and private organizations around the world.",
    },
    {
      id: 4,
      name: "Wayne Enterprises",
      industry: "Conglomerate",
      founded: 1920,
      employees: 4500,
      revenue: "$1.2B",
      website: "www.wayneenterprises.com",
      description:
        "Wayne Enterprises is a diversified conglomerate with interests in a wide range of industries, including technology, healthcare, and real estate. With a strong focus on innovation and social responsibility, Wayne Enterprises has become a respected leader in its field, known for its commitment to sustainable practices and its support for local communities.",
    },
    {
      id: 5,
      name: "Stark Resilient",
      industry: "Energy",
      founded: 2010,
      employees: 800,
      revenue: "$150M",
      website: "www.starkresilient.com",
      description:
        "Stark Resilient is a leading energy company that specializes in the development and deployment of renewable energy solutions. With a focus on cutting-edge technology and a commitment to sustainability, Stark Resilient has become a trusted partner for organizations and individuals looking to reduce their carbon footprint and transition to a more sustainable future.",
    },
    {
      id: 6,
      name: "Oscorp Industries",
      industry: "Biotechnology",
      founded: 1985,
      employees: 1200,
      revenue: "$300M",
      website: "www.oscorp.com",
      description:
        "Oscorp Industries is a pioneering biotechnology company that is at the forefront of cutting-edge research and development in the field of genetic engineering and molecular biology. With a team of world-class scientists and researchers, Oscorp is working to develop innovative solutions that have the potential to transform the way we approach healthcare and disease treatment.",
    },
  ]
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const indexOfLastCompany = currentPage * usersPerPage
  const indexOfFirstCompany = indexOfLastCompany - usersPerPage
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany)
  const totalPages = Math.ceil(filteredCompanies.length / usersPerPage)
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search for companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentCompanies.map((company) => (
          <Card key={company.id} className="bg-white shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src="/placeholder-user.jpg" alt={company.name} />
                  <AvatarFallback>{company.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">{company.name}</CardTitle>
                  <CardDescription className="text-gray-500">{company.industry}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-gray-700 font-medium">{company.founded}</span>
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-gray-700">{company.employees}</span>
                </div>
              </div>
              <div className="flex items-center">
                <DollarSignIcon className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-700">{company.revenue}</span>
              </div>
              <p className="text-gray-700 mt-4">{company.description}</p>
              <div className="mt-4">
                <Link href="#" target="_blank" className="text-primary hover:underline" prefetch={false}>
                  Visit Website
                </Link>
              </div>
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

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DollarSignIcon(props:any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
