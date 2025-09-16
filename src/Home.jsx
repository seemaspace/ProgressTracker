import { useRef } from "react";
import addSteps from './assets/add-steps-anytime.png';
import completeSteps from './assets/complete-steps.png';
import measureProgress from './assets/measure-progress.png';
import compass from './assets/compass.jpg';
import { Link } from "react-router-dom";

function Home() {

  const featuresRef = useRef(null);

  const scrollToFeatureSection = (e)=>{
    e.preventDefault();
    featuresRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-heading">Progress Tracker</h1>
        <p className="hero-paragraph">
          The roads taken in your journey will keep <span className="highlight highlight-primary">changing</span>. 
          <br /> 
          <img className='hero-img' src={compass} alt="compass" />
          <br />
          But it helps to always know <span className="highlight highlight-secondary">how far you have come</span> to appreciate the journey.
        <br />
        <img className='hero-img' src="https://images.unsplash.com/photo-1609159524764-8b2011efe640?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A note on reflection of one's growth" />
        </p>
        <Link className="btn btn-secondary" onClick={scrollToFeatureSection}>Check Features</Link>        
      </section> 
      <section ref={featuresRef} className="features">
        <h2 className="feature-main-heading">
          What all can you plan?
        </h2>
        <div className="feature-card">
          <h3 className="feature-headings">Infinite goal sub steps support</h3>
          <p>Infinitely add sub steps for your goals.</p>
          <img className='feature-img' src={addSteps} alt="addSteps" />

        </div>
        <div className="feature-card">
          <h3 className="feature-headings">Complete steps</h3>
          <p>Complete steps whenever you can.</p>
          <img className='feature-img' src={completeSteps} alt="completeSteps" />

        </div>
        <div className="feature-card">
          <h3 className="feature-headings">Progress tracking through percentage</h3>
          <p>Depending on the steps done, see how far you have come.</p>
          <img className='feature-img' src={measureProgress} alt="measureProgress" />
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-card">
        <h2 className="cta-heading">
          Get Started
        </h2>
          <Link to="/tracker" className="btn btn-primary nav-link">
              Progress Tracker
            </Link>


        </div>

</section>

    </div>
  );
}
export default Home;
