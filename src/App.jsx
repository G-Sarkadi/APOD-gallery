import './App.css';
import Home from './components/main/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './components/gallery/Gallery';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
