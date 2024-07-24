import { createFileRoute } from '@tanstack/react-router'

const About = () => {
    return (
        <div className="p-2">
            <h1>About</h1>
        </div>
    );
};

export const Route = createFileRoute('/about')({
    component: About
})

