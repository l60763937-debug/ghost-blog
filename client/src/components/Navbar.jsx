import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 md:h-20">
        <div className="text-2xl font-bold text-amber-600">
            <span>Ghost</span>
        </div>
        <div className="md:hidden">
            Mobile
        </div>
        <div className="hidden md:block">
           <ul className="flex items-center gap-8 md:gap-12 font-medium">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Trending</Link></li>
            <li><Link to='/'>Most Polpular</Link></li>
            <li><Link to='/'>About</Link></li>
            <li>
                <SignedOut>
                    <Link to='/login'>
                        <button type="button" className="bg-amber-600 text-white px-4 py-2 rounded-full cursor-pointer">
                            👋 Login 
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </li>
           </ul>
        </div>
    </nav>
  )
}

export default Navbar
