import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  return (
    <>
    <ThemeToggle/>
    <nav className="bg-white dark:bg-zinc-900 text-black dark:text-white border-b shadow-sm p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Arisson Tampoc</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    </>
    
  )
}

export default Nav;