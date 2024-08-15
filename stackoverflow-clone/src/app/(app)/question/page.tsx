"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import useQuestion from "@/hooks/useQuestion";
import Link from "next/link";
import { useMemo, useState } from "react"

export default function Question() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState({
        status: "all",
        sort: "newest",
    })

    const questions = useQuestion()
    
    const filteredQuestions = useMemo(() => {
        let filtered = questions
        if (filter.status !== "all") {
            filtered = filtered.filter((q) => q.answers >= filter.status)
        }
        if (filter.sort === "newest") {
            filtered = filtered.sort((a, b) => new Date(b.askedAt) - new Date(a.askedAt))
        } else if (filter.sort === "oldest") {
            filtered = filtered.sort((a, b) => new Date(a.askedAt) - new Date(b.askedAt))
        } else if (filter.sort === "popular") {
            filtered = filtered.sort((a, b) => b.views - a.views)
        }
        return filtered.filter((q) => q.title.toLowerCase().includes(search.toLowerCase()))
    }, [questions, filter, search])
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-background p-4 md:p-6 shadow">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Questions</h1>
                    <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search questions..."
                            className="pl-10 w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Link href={'/question/ask'}>Ask Question</Link>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-4 md:p-6">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <FilterIcon className="h-4 w-4" />
                                    <span>{filter.status === "all" ? "All" : `${filter.status} or more answers`}</span>
                                    <ChevronDownIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>Filter by answers</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={filter.status}
                                    onValueChange={(value) => setFilter((prev) => ({ ...prev, status: value }))}
                                >
                                    <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value={1}>1 or more</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value={5}>5 or more</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value={10}>10 or more</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <ListOrderedIcon className="h-4 w-4" />
                                    <span>
                                        {filter.sort === "newest" ? "Newest" : filter.sort === "oldest" ? "Oldest" : "Most popular"}
                                    </span>
                                    <ChevronDownIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={filter.sort}
                                    onValueChange={(value) => setFilter((prev) => ({ ...prev, sort: value }))}
                                >
                                    <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="popular">Most popular</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="grid gap-4">
                        {filteredQuestions.map((question) => (
                            <Card key={question.id} className="p-4 md:p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <Link href={`/question/${question.id.toString()}`} className="text-lg font-semibold">{question.title}</Link>
                                        <div className="text-sm text-muted-foreground">
                                            {question.answers} answers • {question.views} views
                                        </div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Asked by {question.askedBy} {question.askedAt}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

function ChevronDownIcon(props: any) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function FilterIcon(props: any) {
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
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}


function ListOrderedIcon(props: any) {
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
            <line x1="10" x2="21" y1="6" y2="6" />
            <line x1="10" x2="21" y1="12" y2="12" />
            <line x1="10" x2="21" y1="18" y2="18" />
            <path d="M4 6h1v4" />
            <path d="M4 10h2" />
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </svg>
    )
}


function SearchIcon(props: any) {
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
