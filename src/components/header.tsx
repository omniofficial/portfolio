export function Header() {
    return (
        <header className="header">
            <div className="nav-left">
                <p>PORTFOLIO // 2026</p>
            </div>

            <div className="nav-center">
                <h1 className="header-title">
                    <span id="first-name">ADRIAN:</span>
                    <span id="last-name">Diaz</span>
                </h1>

                <p className="version">Ver 1.0a</p>
            </div>

            <nav className="nav-right">
                <a href="#home">HOME</a>
                <a href="#experience">EXPERIENCE</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
                <a href="#resume">RESUME</a>
            </nav>
        </header>
    );
}
