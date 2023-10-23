import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Victor's Portfolio
                </Link>
            </div>
            <a href="https://docs.google.com/document/d/1rJDkBz-Wz_OXu_cuHwQgDIYjHV3YTc_jMvEZwEt03b4/edit?usp=sharing" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;