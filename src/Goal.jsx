export default function Goal(props){
    return (
        <div className="goal-entry">
            <span className="goal-text">
                {props.goal_text}
            </span>
            <input type="checkbox" />
        </div>        
    )
}