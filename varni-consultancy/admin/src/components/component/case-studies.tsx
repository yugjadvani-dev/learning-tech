import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([
    {
      id: 1,
      title: "Revamping the User Experience",
      client: "Acme Inc.",
      status: "Published",
    },
    {
      id: 2,
      title: "Streamlining the Checkout Process",
      client: "Globex Corp.",
      status: "Draft",
    },
    {
      id: 3,
      title: "Improving Conversion Rates",
      client: "Stark Industries",
      status: "Published",
    },
    {
      id: 4,
      title: "Optimizing for Mobile",
      client: "Wayne Enterprises",
      status: "Draft",
    },
  ])
  const [showModal, setShowModal] = useState(false)
  const [editingCaseStudy, setEditingCaseStudy] = useState(null)
  const handleAddCaseStudy = () => {
    setEditingCaseStudy(null)
    setShowModal(true)
  }
  const handleEditCaseStudy = (caseStudy) => {
    setEditingCaseStudy(caseStudy)
    setShowModal(true)
  }
  const handleDeleteCaseStudy = (id) => {
    setCaseStudies(caseStudies.filter((c) => c.id !== id))
  }
  const handleSaveCaseStudy = (caseStudy) => {
    if (editingCaseStudy) {
      setCaseStudies(caseStudies.map((c) => (c.id === editingCaseStudy.id ? caseStudy : c)))
    } else {
      setCaseStudies([...caseStudies, { ...caseStudy, id: caseStudies.length + 1 }])
    }
    setShowModal(false)
    setEditingCaseStudy(null)
  }
  return (
    <div className="w-full h-full flex flex-col">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Case Studies</h1>
        <Button onClick={handleAddCaseStudy}>Add Case Study</Button>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {caseStudies.map((caseStudy) => (
              <TableRow key={caseStudy.id}>
                <TableCell>{caseStudy.title}</TableCell>
                <TableCell>{caseStudy.client}</TableCell>
                <TableCell>
                  <Badge variant={caseStudy.status === "Published" ? "success" : "warning"}>{caseStudy.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" onClick={() => handleEditCaseStudy(caseStudy)}>
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-2"
                    onClick={() => handleDeleteCaseStudy(caseStudy.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
      {showModal && (
        <div>
          <div>
            <div>
              <div>{editingCaseStudy ? "Edit Case Study" : "Add Case Study"}</div>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const caseStudy = {
                    title: formData.get("title"),
                    client: formData.get("client"),
                    description: formData.get("description"),
                    image: formData.get("image"),
                  }
                  handleSaveCaseStudy(caseStudy)
                }}
              >
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" name="title" defaultValue={editingCaseStudy?.title} required />
                    </div>
                    <div>
                      <Label htmlFor="client">Client</Label>
                      <Input id="client" name="client" defaultValue={editingCaseStudy?.client} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      defaultValue={editingCaseStudy?.description}
                      required
                      className="min-h-[200px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Case Study Image</Label>
                    <Input id="image" name="image" type="file" accept="image/*" />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}