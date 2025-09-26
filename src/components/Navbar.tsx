import { ThemeButton } from "./ThemeButton"

export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4">
            <h1>GoldenGate</h1>
            <div>
                <ThemeButton />
            </div>
        </nav>
    )
}