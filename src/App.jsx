import './App.css';
import Home from './components/main/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { lazy } from 'react'

const Gallery = lazy(()=> import('./components/gallery/Gallery'))
const About = lazy(() => import('./components/about/About'))
const NotFound = lazy(() => import('./components/not_found/NotFound'))

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
