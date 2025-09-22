import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProgressTracker from "./ProgressTracker";
import Header from "./Header";
import Footer from "./Footer";
import { useRef } from "react";

function App() {

    const featuresRef = useRef(null);

  const scrollToFeatureSection = (e)=>{
    e.preventDefault();
    featuresRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <Router>
      <div className="container">
      <Header props={scrollToFeatureSection} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home props={featuresRef} />} />
          <Route path="/login" element={<Home props={featuresRef} />} />
          <Route path="/register" element={<Home props={featuresRef} />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracker" element={<ProgressTracker />} />
        </Routes>
      </main>

      <Footer />

      </div>

    </Router>
  );
}

export default App;
