import './App.css';
import Home from './components/main/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './components/gallery/Gallery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
