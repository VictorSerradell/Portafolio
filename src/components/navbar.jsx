import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Victor's Portfolio
                </Link>
                
            </div>
            
        </div>
    )
}

export default Navbar;