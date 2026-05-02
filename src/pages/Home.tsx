import { Header } from "../components/header";
import { Footer } from "../components/footer";
import pfp_logo from "../assets/logo.png";
import github_logo from "../assets/github.svg";
import linkedin_logo from "../assets/linkedin.svg";
import discord_logo from "../assets/discord.svg";
import azure from "../assets/azure.webp";
import accountabuddy from "../assets/accountabuddy-logo.png";
import rubix_tutor from "../assets/rubix_cube.webp";
import janemba from "../assets/janemba.png";

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

                    <div className="experience-list">
                        <div className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h2>Data Entry Specialist</h2>
                                    <p className="experience-company">
                                        Smile Brands Inc.
                                    </p>
                                </div>

                                <div className="experience-data">
                                    <p>April 2024 – Present</p>
                                    <p>Costa Mesa, CA</p>
                                </div>
                            </div>

                            <div className="experience-card-text">
                                <ul>
                                    <li>
                                        Configured dental insurance plans via
                                        Dentrix Ascend, ensuring system accuracy
                                        and compliance with submitted tickets.
                                    </li>
                                    <li>
                                        Supported 600+ offices by resolving
                                        insurance and data issues.
                                    </li>
                                    <li>
                                        Implemented data validation protocols
                                        using advanced Excel functions to
                                        identify and resolve data
                                        inconsistencies, improving fee schedule
                                        accuracy by 25%.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="experience-card">
                            <div className="experience-header">
                                <div>
                                    <h2>Software Engineering Intern</h2>
                                    <p className="experience-company">
                                        UC Irvine
                                    </p>
                                </div>

                                <div className="experience-data">
                                    <p>July 2021 – Aug 2021</p>
                                    <p>Irvine, CA</p>
                                </div>
                            </div>

                            <div className="experience-card-text">
                                <ul>
                                    <li>
                                        Developed Python code for autonomous
                                        motion planning, modeling navigation
                                        logic and pathfinding algorithms.
                                    </li>
                                    <li>
                                        Implemented Dijkstra’s algorithm to
                                        improve route planning efficiency for
                                        obstacle rich environments.
                                    </li>
                                    <li>
                                        Visualized algorithm behavior using
                                        Matplotlib and mathematical libraries to
                                        identify performance bottlenecks and
                                        enhance motion logic.
                                    </li>
                                    <li>
                                        Contributed to detailed technical
                                        documentation on algorithm design,
                                        facilitating team knowledge sharing.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="divider" />

                <section id="projects">
                    <h1 className="subtitle">./projects</h1>

                    <div className="projects-list">
                        <div className="project-card">
                            <img
                                className="project-image"
                                src={azure}
                                alt="project preview"
                            />

                            <div className="project-content">
                                <h2 className="project-title">
                                    Azure Cloud Migration Project (IN_PROGRESS)
                                </h2>

                                <p className="project-description">
                                    A cloud migration project that moved a
                                    Windows Server 2022 Active Directory
                                    environment to Microsoft Azure. It involved
                                    designing secure virtual networking with
                                    subnets and Network Security Groups,
                                    implementing security hardening, and
                                    planning a rollout across 20 virtual
                                    machines.
                                </p>

                                <div className="project-tech">
                                    <div className="tech-stack">
                                        Microsoft Azure
                                    </div>
                                    <div className="tech-stack">
                                        Windows Server
                                    </div>
                                    <div className="tech-stack">
                                        Active Directory
                                    </div>
                                </div>

                                <div className="project-links">
                                    <a
                                        className="project-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={pfp_logo}
                                            alt="documentation"
                                        />
                                        <span>Documentation</span>
                                    </a>

                                    <a
                                        className="project-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={pfp_logo}
                                            alt="migration_plan"
                                        />
                                        <span>Migration Plan</span>
                                    </a>

                                    <a
                                        className="project-link"
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={pfp_logo}
                                            alt="post_completion"
                                        />
                                        <span>Post Completion (Write Up)</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                className="project-image"
                                src={accountabuddy}
                                alt="project preview"
                            />

                            <div className="project-content">
                                <h2 className="project-title">Accountabuddy</h2>

                                <p className="project-description">
                                    A mobile application designed to improve
                                    task completion through social
                                    accountability. Users can add friends, share
                                    tasks, and track progress within a
                                    collaborative environment. Built with
                                    Firebase to support real-time updates,
                                    comments, and user interactions across 100+
                                    active users.
                                </p>

                                <div className="project-tech">
                                    <div className="tech-stack">
                                        React Native
                                    </div>
                                    <div className="tech-stack">Firebase</div>
                                    <div className="tech-stack">Typescript</div>
                                </div>

                                <div className="project-links">
                                    <a
                                        className="project-link"
                                        href="https://github.com/jguan79/accountabuddy"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={github_logo} alt="github" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                className="project-image"
                                src={rubix_tutor}
                                alt="project preview"
                            />

                            <div className="project-content">
                                <h2 className="project-title">Rubix Tutor</h2>

                                <p className="project-description">
                                    An AI-powered Rubik’s Cube solver that uses
                                    IDA* and IDDFS to explore large state spaces
                                    and generate optimal move sequences.
                                    Designed an admissible heuristic using a
                                    corner orientation pattern database built
                                    with BFS, improving average solve depth.
                                    Includes a visualization interface built
                                    with Matplotlib to display cube states and
                                    recommended moves.
                                </p>

                                <div className="project-tech">
                                    <div className="tech-stack">Python</div>
                                    <div className="tech-stack">NumPy</div>
                                    <div className="tech-stack">Matplotlib</div>
                                </div>

                                <div className="project-links">
                                    <a
                                        className="project-link"
                                        href="https://github.com/christian1251/481-Capstone"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={github_logo} alt="github" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-card">
                            <img
                                className="project-image"
                                src={janemba}
                                alt="project preview"
                            />

                            <div className="project-content">
                                <h2 className="project-title">Janemba</h2>

                                <p className="project-description">
                                    A top-down compiler built in Python using
                                    predictive parsing techniques. It reads and
                                    preprocesses source files by tokenizing
                                    input, removing whitespace and formatting
                                    inconsistencies, and translating code into
                                    Python.
                                </p>

                                <div className="project-tech">
                                    <div className="tech-stack">Python</div>
                                    <div className="tech-stack">Node.js</div>
                                    <div className="tech-stack">Postgres</div>
                                </div>

                                <div className="project-links">
                                    <a
                                        className="project-link"
                                        href="https://github.com/omniofficial/janemba"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={github_logo} alt="github" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="divider" />

                <section id="contact">
                    <h1 className="subtitle">./contact</h1>
                    <p>Email: adrian.b.diaz04@gmail.com</p>
                </section>

                <div className="divider" />
            </div>

            <Footer />
        </main>
    );
}
