import addSteps from './assets/add-steps-anytime.png';
import completeSteps from './assets/complete-steps.png';
import measureProgress from './assets/measure-progress.png';
import { Link } from "react-router-dom";

function Home(props) {



  return (
    <div className="home-container">
      <section ref={props.featuresRef} className="features">
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
