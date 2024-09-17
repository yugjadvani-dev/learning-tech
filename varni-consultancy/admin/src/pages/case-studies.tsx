import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<any>(null);
  const handleAddCaseStudy = () => {
    setEditingCaseStudy(null);
    setShowModal(true);
  };
  const handleEditCaseStudy = (caseStudy: any) => {
    setEditingCaseStudy(caseStudy);
    setShowModal(true);
  };
  const handleDeleteCaseStudy = (id: any) => {
    setCaseStudies(caseStudies.filter((c) => c.id !== id));
  };
  const handleSaveCaseStudy = (caseStudy: any) => {
    if (editingCaseStudy) {
      setCaseStudies(
        caseStudies.map((c) => (c.id === editingCaseStudy.id ? caseStudy : c))
      );
    } else {
      setCaseStudies([
        ...caseStudies,
        { ...caseStudy, id: caseStudies.length + 1 },
      ]);
    }
    setShowModal(false);
    setEditingCaseStudy(null);
  };
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="overflow-auto flex flex-1 gap-4 p-4 md:p-6">
        <Sidebar />
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
                  <Badge
                    variant={
                      caseStudy.status === "Published"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {caseStudy.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditCaseStudy(caseStudy)}
                  >
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
              <div>
                {editingCaseStudy ? "Edit Case Study" : "Add Case Study"}
              </div>
            </div>
            <div>
              <form
                onSubmit={(e: any) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const caseStudy = {
                    title: formData.get("title"),
                    client: formData.get("client"),
                    description: formData.get("description"),
                    image: formData.get("image"),
                  };
                  handleSaveCaseStudy(caseStudy);
                }}
              >
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        defaultValue={editingCaseStudy?.title}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="client">Client</Label>
                      <Input
                        id="client"
                        name="client"
                        defaultValue={editingCaseStudy?.client}
                        required
                      />
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
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowModal(false)}
                  >
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
  );
}
