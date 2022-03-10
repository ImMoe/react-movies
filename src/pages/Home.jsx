import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="category">
            <Link to="/movies">
                <div className="card">
                    <img
                        src="https://www.denofgeek.com/wp-content/uploads/2022/01/The-Batman.jpg?fit=1919%2C1080"
                        alt="Movies"
                    />
                    <p>Popular movies</p>
                </div>
            </Link>
            <Link to="/series">
                <div className="card">
                    <img
                        src="https://storage.googleapis.com/orchestra-cafe-7jp1kqsp/uploads/2020/07/218bca51-thewitcher.png"
                        alt="Series"
                    />
                    <p>Popular series</p>
                </div>
            </Link>
        </div>
    );
}

export default Home;
