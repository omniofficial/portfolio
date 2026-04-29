import logo from "../assets/logo.png";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
    return (
        <main>
            <Header />

            <section id="home">
                <h1>Main Title</h1>
                <p>Welcome to my portfolio</p>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <p>My work goes here...</p>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Email: example@email.com</p>
            </section>

            <Footer />
        </main>
    );
}
