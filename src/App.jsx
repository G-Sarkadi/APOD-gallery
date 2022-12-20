import './App.css';
import Home from './components/main/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './components/gallery/Gallery';
import Layout from './components/Layout';
import NotFound from './components/not_found/NotFound';
import About from './components/about/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
