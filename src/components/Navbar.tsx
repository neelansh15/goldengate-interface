import { ThemeButton } from "./ThemeButton"

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-8 bg-transparent">
            <h1 className="text-3xl">GoldenGate</h1>
            <div>
                <ThemeButton />
            </div>
        </nav>
    )
}