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
                        Pursuing a Bachelors in{" "}
                        <span className="highlight">COMPUTER SCIENCE</span> at
                        California State University, Fullerton.
                    </p>

                    <p>
                        During my free time, I enjoy spending time with my
                        family and reading.
                    </p>

                    <p>
                        Links below if you would like to{" "}
                        <span className="highlight">CONNECT.</span>
                    </p>
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
