import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            
            <Image src='/images/profile.jpeg' className="profile-img" width={700} height={600} alt="Victor's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Victor Serradell Pinto 👋</h1>
                <p>
                    I'm a software developer. I specialize in designing front-end websites, applications, and everything in between.
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
            <a href="https://docs.google.com/document/d/1rJDkBz-Wz_OXu_cuHwQgDIYjHV3YTc_jMvEZwEt03b4/edit?usp=sharing" className="cta-btn">Resume</a>

            
            
        </div>
    )
}

export default Hero;