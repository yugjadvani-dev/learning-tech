import { createFileRoute } from "@tanstack/react-router";

const HomePage = () => {
    return (
        <div className="p-2">
            <h1>HomePage</h1>
        </div>
    )
}

export const Route = createFileRoute("/")({
    component : HomePage
})