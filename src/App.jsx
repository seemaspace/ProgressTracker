import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProgressTracker from "./ProgressTracker";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracker" element={<ProgressTracker />} />
        </Routes>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
