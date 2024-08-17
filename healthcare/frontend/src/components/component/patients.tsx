import { useState } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function Patients() {
  const [search, setSearch] = useState("")
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 45,
      condition: "Diabetes",
      nextAppointment: "2023-06-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      condition: "Asthma",
      nextAppointment: "2023-07-01",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 58,
      condition: "Heart Disease",
      nextAppointment: "2023-08-10",
    },
    {
      id: 4,
      name: "Emily Davis",
      age: 27,
      condition: "Anxiety",
      nextAppointment: "2023-09-20",
    },
    {
      id: 5,
      name: "David Wilson",
      age: 41,
      condition: "Arthritis",
      nextAppointment: "2023-10-05",
    },
  ]
  const filteredPatients = patients.filter((patient) => patient.name.toLowerCase().includes(search.toLowerCase()))
  const sortedPatients = filteredPatients.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>
        <p className="text-muted-foreground">View and manage patient information.</p>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("name")}>
                Name{" "}
                {sortColumn === "name" && <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </th>
              <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("age")}>
                Age{" "}
                {sortColumn === "age" && <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>}
              </th>
              <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort("condition")}>
                Condition{" "}
                {sortColumn === "condition" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u25B2" : "\u25BC"}</span>
                )}
              </th>
              <th className="px-4 py-3 text-left">Next Appointment</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPatients.map((patient) => (
              <tr key={patient.id} className="border-b border-muted/40 hover:bg-muted/20">
                <td className="px-4 py-3 font-medium">{patient.name}</td>
                <td className="px-4 py-3">{patient.age}</td>
                <td className="px-4 py-3">{patient.condition}</td>
                <td className="px-4 py-3">{patient.nextAppointment}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SearchIcon(props) {
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
