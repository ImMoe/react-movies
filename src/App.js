import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        retriveFeed();
    }, []);

    function retriveFeed() {
        fetch("feed.json")
            .then((response) => response.json())
            .then((data) => {
                setFeed(data);
                setLoading(false);
            })
            .catch(() => setError("Ops something went wrong!"));
    }
    return (
        <>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/movies"
                        element={
                            <Movies
                                feed={feed}
                                loading={loading}
                                error={error}
                            />
                        }
                    />
                    <Route
                        path="/series"
                        element={
                            <Series
                                feed={feed}
                                loading={loading}
                                error={error}
                            />
                        }
                    />
                </Routes>
            </Container>
            <Footer />
        </>
    );
}

export default App;
