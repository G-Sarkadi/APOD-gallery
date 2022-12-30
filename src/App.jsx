import './App.css';
import Home from './pages/Main/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { lazy } from 'react'

const Gallery = lazy(()=> import('./pages/Gallery/Gallery'))
const About = lazy(() => import('./pages/About/About'))
const NotFound = lazy(() => import('./pages/Not_found/NotFound'))

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
