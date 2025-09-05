import { useRef } from "react";
import addSteps from './assets/add-steps-anytime.png';
import completeSteps from './assets/complete-steps.png';
import measureProgress from './assets/measure-progress.png';
import compass from './assets/compass.jpg';

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
        <h1>Progress Tracker</h1>
        <p>
          The roads taken in your journey will keep <span>changing</span>. 
          <br /> 
          But it helps to always know <span>how far you have come</span> to appreciate the journey.
          <img src={compass} alt="compass" width='300px' />
        </p>
        <button type="button" onClick={scrollToFeatureSection}>Check Features</button>        
        <img src="https://images.unsplash.com/photo-1609159524764-8b2011efe640?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A note on reflection of one's growth" width='300px' />
      </section>
      <section ref={featuresRef} className="features">
        <div className="feature-card">
          <h3>Infinite goal sub steps support</h3>
          <p>Infinitely add sub steps for your goals.</p>
          <img src={addSteps} alt="addSteps" width='300px' />

        </div>
        <div className="feature-card">
          <h3>Complete steps</h3>
          <p>Complete steps whenever you can.</p>
          <img src={completeSteps} alt="completeSteps" width='300px' />

        </div>
        <div className="feature-card">
          <h3>Progress tracking through percentage</h3>
          <p>Depending on the steps done, see how far you have come.</p>
          <img src={measureProgress} alt="measureProgress" width='300px' />
        </div>
      </section>
    </div>
  );
}
export default Home;
