import Goal from './Goal'

function ProgressTracker() {
  return (
    <div className="tracker-container">
      <h2>Start adding your goals here!</h2>
      <form action="/api/v1/goals" method="post">
        <label for="goal-title">Goal title</label>
        <input id='goal-title' type="text" name="goal_title" placeholder="Enter your goal" minLength="10" required/>
        <br />
        <label for="goal-type">Goal Type</label>
        <select id="goal-type" name="goal_type" >
          <option value="learning">Learning</option>
          <option value="fitness">Fitness</option>
          <option value="cooking">Cooking</option>
        </select>
        <br />
        <label for="goal-summary-notes" >Notes</label>
        <textarea id = "goal-summary-notes" name="goal_notes" cols="30" rows="10" minLength="10">I will</textarea>
        <br />
        <button type="submit">Add goal</button>
        <button type="reset">Clear</button>

      </form>
      <br />

      <Goal goal_text="props drill practice"/>
      <ul>
        <li>
          Mastering HTML
          <ul>
            <li>
              Watch youtube videos from Future Full Stack.{" "}
              <input type="checkbox" name="" id="" />{" "}
            </li>
            <li>
              Build progress tracker. <input type="checkbox" name="" id="" />{" "}
            </li>
            <li>
              Setup node-js, npm and react.js on linux.{" "}
              <input type="checkbox" name="" id="" />{" "}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ProgressTracker;
