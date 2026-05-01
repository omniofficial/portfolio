import { Header } from "../components/header";
import { Footer } from "../components/footer";
import pfp_logo from "../assets/logo.png";
import github_logo from "../assets/github.svg";
import linkedin_logo from "../assets/linkedin.svg";
import discord_logo from "../assets/discord.svg";

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
                            src={pfp_logo}
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

                    <p id="last-pp">
                        I enjoy creating full stack applications, learning new
                        technologies, and working on projects with intent. I am
                        always open to collaboration with others.
                    </p>
                    <div className="divider-small"></div>
                    <p id="p-center">
                        Please visit any of the images below if you would like
                        to <span className="highlight">CONNECT.</span>
                    </p>

                    <div className="social-links">
                        <div className="social-item">
                            <a
                                href="https://github.com/omniofficial"
                                target="_blank"
                            >
                                <img
                                    className="social-image"
                                    src={github_logo}
                                    alt="github_image"
                                />
                            </a>

                            <p>Github</p>
                        </div>

                        <div className="social-item">
                            <a
                                href="https://www.linkedin.com/in/diaz2/"
                                target="_blank"
                            >
                                <img
                                    className="social-image"
                                    src={linkedin_logo}
                                    alt="linkedin_image"
                                />
                            </a>
                            <p>LinkedIn</p>
                        </div>

                        <div className="social-item">
                            <a href="https://google.com" target="_blank">
                                <img
                                    className="social-image"
                                    src={discord_logo}
                                    alt="discord_image"
                                />
                            </a>
                            <p>@omniofficial</p>
                        </div>
                    </div>
                    <div className="divider-small"></div>
                </section>

                <div className="divider" />

                <section id="experience">
                    <h1 className="subtitle">./experience</h1>
                    <p>My work goes here...</p>
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
