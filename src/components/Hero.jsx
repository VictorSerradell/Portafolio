import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Victor's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Victor Serradell Pinto 👋</h1>
                <p>
                    I'm a software developer based in Madrid, Spain. I specialize in designing  (and occasionally building) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
                    <a
                        href="https://github.com/VictorSerradell"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/victor-serradell-pinto-7ba06699/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;