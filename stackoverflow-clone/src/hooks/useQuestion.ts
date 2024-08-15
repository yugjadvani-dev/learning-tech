"use client";

interface Questions {
    id: number;
    title: string;
    answers: number;
    views: number;
    askedBy: string;
    askedAt: string;
}

function useQuestion() {
    const questions: Questions[] = [
        {
            id: 1,
            title: "How do I create a React component?",
            answers: 25,
            views: 1234,
            askedBy: "John Doe",
            askedAt: "2 hours ago",
        },
        {
            id: 2,
            title: "What is the difference between let and const in JavaScript?",
            answers: 50,
            views: 2345,
            askedBy: "Jane Smith",
            askedAt: "1 day ago",
        },
        {
            id: 3,
            title: "How do I use CSS Grid to create a responsive layout?",
            answers: 15,
            views: 789,
            askedBy: "Bob Johnson",
            askedAt: "3 days ago",
        },
        {
            id: 4,
            title: "What is the purpose of the useEffect hook in React?",
            answers: 30,
            views: 1567,
            askedBy: "Sarah Lee",
            askedAt: "1 week ago",
        },
        {
            id: 5,
            title: "How do I implement authentication in a Node.js application?",
            answers: 20,
            views: 1123,
            askedBy: "Mike Brown",
            askedAt: "2 weeks ago",
        },
        {
            id: 6,
            title: "What are the benefits of using TypeScript with React?",
            answers: 15,
            views: 567,
            askedBy: "Jane Smith",
            askedAt: "1 day ago"
        },
        {
            id: 7,
            title: "How do I center a div using Flexbox in CSS?",
            answers: 32,
            views: 2456,
            askedBy: "Alex Johnson",
            askedAt: "3 hours ago"
        },
        {
            id: 8,
            title: "What is the difference between `let`, `var`, and `const` in JavaScript?",
            answers: 40,
            views: 1890,
            askedBy: "Michael Lee",
            askedAt: "4 hours ago"
        },
        {
            id: 9,
            title: "How do I implement server-side rendering (SSR) in Next.js?",
            answers: 20,
            views: 1450,
            askedBy: "Emily Davis",
            askedAt: "6 hours ago"
        },
        {
            id: 10,
            title: "How do I handle state management in a React Native app?",
            answers: 18,
            views: 998,
            askedBy: "Chris Brown",
            askedAt: "1 hour ago"
        },
    ] as const;

    return questions;
}

export default useQuestion;