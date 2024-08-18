import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function OurCareTeam() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const providers = [
    {
      name: "Dr. Emma Sinclair",
      title: "Family Medicine Physician",
      specialty: "Family Medicine",
      bio: "Dr. Sinclair is a board-certified family medicine physician with over 10 years of experience. She is passionate about providing comprehensive, patient-centered care to patients of all ages.",
    },
    {
      name: "Dr. Michael Chen",
      title: "Pediatrician",
      specialty: "Pediatrics",
      bio: "Dr. Chen is a board-certified pediatrician who specializes in caring for children from birth to adolescence. He is known for his gentle bedside manner and his commitment to promoting healthy development.",
    },
    {
      name: "Dr. Samantha Patel",
      title: "Cardiologist",
      specialty: "Cardiology",
      bio: "Dr. Patel is a board-certified cardiologist with expertise in the diagnosis and treatment of heart conditions. She is dedicated to helping her patients achieve optimal cardiovascular health.",
    },
    {
      name: "Dr. Liam Nguyen",
      title: "Orthopedic Surgeon",
      specialty: "Orthopedics",
      bio: "Dr. Nguyen is a board-certified orthopedic surgeon who specializes in the treatment of musculoskeletal injuries and conditions. He is known for his innovative surgical techniques and his commitment to patient-centered care.",
    },
    {
      name: "Dr. Olivia Hernandez",
      title: "Obstetrician-Gynecologist",
      specialty: "Obstetrics and Gynecology",
      bio: "Dr. Hernandez is a board-certified obstetrician-gynecologist who specializes in the care of women throughout all stages of life. She is passionate about empowering her patients and promoting women's health.",
    },
    {
      name: "Dr. Ethan Ramirez",
      title: "Dermatologist",
      specialty: "Dermatology",
      bio: "Dr. Ramirez is a board-certified dermatologist who specializes in the diagnosis and treatment of skin, hair, and nail conditions. He is known for his expertise in medical and cosmetic dermatology.",
    },
  ]
  const filteredProviders =
    selectedSpecialty === "all" ? providers : providers.filter((provider) => provider.specialty === selectedSpecialty)
  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Care Team</h2>
        </div>
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Filter by specialty:</span>
              <Select value={selectedSpecialty} className="w-auto" onValueChange={setSelectedSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Family Medicine">Family Medicine</SelectItem>
                  <SelectItem value="Pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="Cardiology">Cardiology</SelectItem>
                  <SelectItem value="Orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="Obstetrics and Gynecology">Obstetrics and Gynecology</SelectItem>
                  <SelectItem value="Dermatology">Dermatology</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProviders.map((provider, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
                <p className="text-muted-foreground mb-4">{provider.title}</p>
                <p className="text-muted-foreground mb-4">{provider.specialty}</p>
                <p className="text-muted-foreground">{provider.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
