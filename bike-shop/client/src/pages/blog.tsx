import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Link } from "react-router-dom"

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Bike Maintenance",
      excerpt:
        "Keeping your bike in top shape is essential for a smooth and safe ride. In this comprehensive guide, we cover everything you need to know about bike maintenance, from basic tune-ups to more advanced repairs.",
      category: "Maintenance",
      date: "2023-05-01",
    },
    {
      id: 2,
      title: "5 Best Mountain Bikes for Beginners",
      excerpt:
        "Choosing the right mountain bike can be a daunting task, especially for those new to the sport. In this article, we've rounded up the top 5 mountain bikes that are perfect for beginner riders.",
      category: "Buying Guides",
      date: "2023-06-15",
    },
    {
      id: 3,
      title: "The Benefits of Cycling for Your Health",
      excerpt:
        "Cycling is not only a fun and eco-friendly way to get around, but it also offers numerous health benefits. From improved cardiovascular fitness to better mental well-being, discover why you should start cycling today.",
      category: "Lifestyle",
      date: "2023-07-20",
    },
    {
      id: 4,
      title: "10 Must-Visit Bike Trails in the Pacific Northwest",
      excerpt:
        "The Pacific Northwest is a haven for outdoor enthusiasts, and bike trails are no exception. Explore our top 10 must-visit bike trails in the region, from scenic coastal routes to challenging mountain paths.",
      category: "Travel",
      date: "2023-08-01",
    },
    {
      id: 5,
      title: "How to Choose the Right Bike Helmet",
      excerpt:
        "Protecting your head is crucial when cycling, and choosing the right bike helmet can make all the difference. In this guide, we'll walk you through the key factors to consider when selecting a helmet that fits your needs and keeps you safe.",
      category: "Safety",
      date: "2023-09-10",
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "" || post.category === selectedCategory
      const matchesDate = selectedDate === "" || post.date.startsWith(selectedDate)
      return matchesSearch && matchesCategory && matchesDate
    })
  }, [searchTerm, selectedCategory, selectedDate])
  const featuredPost = blogPosts[0]
  const blogCategories = ["Maintenance", "Buying Guides", "Lifestyle", "Travel", "Safety"]
  return (
    <div className="bg-background text-foreground">
      
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent>
                      <div className="mb-4">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-muted-foreground text-sm">{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Featured Post</h2>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold">{featuredPost.title}</h3>
                    <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <span className="text-muted-foreground text-sm">{featuredPost.date}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Filter Posts</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="search" className="block mb-2 text-sm">
                    Search
                  </label>
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search blog posts"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block mb-2 text-sm">
                    Category
                  </label>
                  <Select
                    id="category"
                    value={selectedCategory}
                    onValueChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {blogCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label htmlFor="date" className="block mb-2 text-sm">
                    Date
                  </label>
                  <Input
                    id="date"
                    type="month"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
     
    </div>
  )
}

function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
