"use client"

import { SetStateAction, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Pagination } from "@/components/ui/pagination"

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(12)
  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      reputation: 12345,
      location: "New York, USA",
      joinedAt: "2015-06-01",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a software engineer with a passion for problem-solving and building scalable applications.",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      reputation: 9876,
      location: "San Francisco, USA",
      joinedAt: "2018-03-15",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a full-stack developer with experience in React, Node.js, and MongoDB.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      username: "michaelj",
      reputation: 7654,
      location: "London, UK",
      joinedAt: "2020-11-22",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a passionate coder who loves to learn new technologies and contribute to open-source projects.",
    },
    {
      id: 4,
      name: "Emily Davis",
      username: "emilyd",
      reputation: 5432,
      location: "Sydney, Australia",
      joinedAt: "2019-08-09",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a data analyst who enjoys solving complex problems and visualizing data.",
    },
    {
      id: 5,
      name: "David Lee",
      username: "davidlee",
      reputation: 3210,
      location: "Toronto, Canada",
      joinedAt: "2021-04-30",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a mobile app developer with experience in both iOS and Android platforms.",
    },
    {
      id: 6,
      name: "Sarah Chen",
      username: "sarahchen",
      reputation: 2109,
      location: "Berlin, Germany",
      joinedAt: "2017-12-01",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a UI/UX designer who loves to create visually appealing and user-friendly interfaces.",
    },
    {
      id: 7,
      name: "Alex Nguyen",
      username: "alexnguyen",
      reputation: 1987,
      location: "Tokyo, Japan",
      joinedAt: "2020-06-15",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a backend engineer with expertise in building scalable and secure APIs.",
    },
    {
      id: 8,
      name: "Olivia Patel",
      username: "oliviapatel",
      reputation: 1654,
      location: "Mumbai, India",
      joinedAt: "2019-02-28",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a full-stack developer who enjoys working on both client-side and server-side technologies.",
    },
    {
      id: 9,
      name: "William Gonzalez",
      username: "williamgonzalez",
      reputation: 1432,
      location: "Mexico City, Mexico",
      joinedAt: "2018-09-12",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a DevOps engineer who loves to automate and optimize infrastructure and deployment processes.",
    },
    {
      id: 10,
      name: "Isabella Rossi",
      username: "isabellarossi",
      reputation: 1210,
      location: "Rome, Italy",
      joinedAt: "2021-01-05",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a technical writer who enjoys creating clear and concise documentation for developers.",
    },
    {
      id: 11,
      name: "Lucas Fernandez",
      username: "lucasfernandez",
      reputation: 987,
      location: "Buenos Aires, Argentina",
      joinedAt: "2019-05-20",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a software architect who focuses on designing scalable and maintainable systems.",
    },
    {
      id: 12,
      name: "Sophia Nguyen",
      username: "sophianguyen",
      reputation: 765,
      location: "Ho Chi Minh City, Vietnam",
      joinedAt: "2020-09-01",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a machine learning engineer who enjoys building intelligent systems that solve real-world problems.",
    },
    {
      id: 13,
      name: "Ethan Patel",
      username: "ethanpatel",
      reputation: 543,
      location: "Dubai, UAE",
      joinedAt: "2018-11-30",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a cybersecurity specialist who focuses on protecting organizations from cyber threats.",
    },
    {
      id: 14,
      name: "Ava Gonzalez",
      username: "avagonzalez",
      reputation: 321,
      location: "Madrid, Spain",
      joinedAt: "2021-03-15",
      profilePicture: "/placeholder-user.jpg",
      about: "I am a front-end developer who loves to create visually stunning and responsive user interfaces.",
    },
    {
      id: 15,
      name: "Noah Rossi",
      username: "noahrossi",
      reputation: 210,
      location: "Milan, Italy",
      joinedAt: "2020-02-28",
      profilePicture: "/placeholder-user.jpg",
      about:
        "I am a technical support specialist who enjoys helping users solve their problems and improve their productivity.",
    },
    {
      id: 16,
      name: "Mia Fernandez",
      username: "miafernandez",
      reputation: 98,
      location: "Sao Paulo, Brazil",
      joinedAt: "2019-08-01",
      profilePicture: "/placeholder-user.jpg",
      about:
        "I am a quality assurance engineer who focuses on ensuring the reliability and usability of software applications.",
    },
  ]
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search for users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentUsers.map((user) => (
          <Card key={user.id} className="bg-white shadow-md">
            <CardHeader>
              <div className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src="/placeholder-user.jpg" alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">{user.name}</CardTitle>
                  <CardDescription className="text-gray-500">@{user.username}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MedalIcon className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-gray-700 font-medium">{user.reputation}</span>
                </div>
                <div className="flex items-center">
                  <LocateIcon className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-gray-700">{user.location}</span>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-700">Joined {user.joinedAt}</span>
              </div>
              <p className="text-gray-700 mt-4">{user.about}</p>
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


function LocateIcon(props:any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MedalIcon(props:any) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}
