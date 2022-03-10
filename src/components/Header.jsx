import { Link } from "react-router-dom";
import Container from "./Container";
import "./Header.css";
function Header() {
    return (
        <div className="header">
            <Container>
                <div className="justify-between">
                    <div className="logo">
                        <Link to="/">Streamz</Link>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                        <li>
                            <Link to="/series">Series</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Header;
