import { Header } from "../components/header";
import { Footer } from "../components/footer";
import logo from "../assets/logo.png";

export default function Home() {
    return (
        <main>
            <Header />

            <section id="home" className="hero">
                <div className="hero-center">
                    <h1 className="hero-name">
                        <span className="hero-first">ADRIAN</span>
                        <span className="hero-colon">:</span>
                        <span className="hero-last">DIAZ</span>
                    </h1>
                    <div className="hero-handle">
                        <img
                            className="hero-handle-logo"
                            src={logo}
                            alt="logo"
                        />
                        <p className="hero-handle-text">@omniofficial</p>
                    </div>
                </div>

                <p className="hero-quote">
                    "A future is not given to you. It is something you must take
                    for yourself."
                </p>
            </section>

            <div className="page">
                <div className="divider" />

                <section className="about">
                    <h1 className="subtitle">./about_me</h1>
                    <p>
                        I’m a Computer Science student at{" "}
                        <span className="highlight">
                            CALIFORNIA STATE UNIVERSITY, FULLERTON,
                        </span>{" "}
                        focused on building reusable and reliable software.
                    </p>

                    <p>
                        I enjoy creating full stack applications, learning new
                        technologies, and working on projects with intent. I am
                        always open to collaboration with others in the
                        community.
                    </p>

                    <p>
                        Please visit any of the links below if you would like to{" "}
                        <span className="highlight">CONNECT.</span>
                    </p>

                    <div className="social-links">
                        <div className="github">
                            <img
                                className="social-image"
                                src={logo}
                                alt="github_image"
                            />
                            <p>Github</p>
                        </div>

                        <div className="linkedin">
                            <img
                                className="social-image"
                                src={logo}
                                alt="linkedin_image"
                            />
                            <p>Linkedin</p>
                        </div>

                        <div className="discord">
                            <img
                                className="social-image"
                                src={logo}
                                alt="discord_image"
                            />
                            <p>@omniofficial</p>
                        </div>
                    </div>
                </section>

                <div className="divider" />

                <section id="projects">
                    <h1 className="subtitle">./projects</h1>
                    <p>My work goes here...</p>
                </section>

                <div className="divider" />

                <section id="contact">
                    <h1 className="subtitle">./contact</h1>
                    <p>Email: example@email.com</p>
                </section>

                <div className="divider" />
            </div>

            <Footer />
        </main>
    );
}
