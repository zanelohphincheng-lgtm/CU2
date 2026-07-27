const Task = ({ task, isDone, onToggle }) => {
  return (
    <div className="d-flex align-items-center my-2">
      <input type="checkbox" className="me-3" checked={isDone} readOnly onClick={onToggle} />
      {/* The input for the checkbox is how and so we put on a onClick linking back to the onToggle in the App.jsx's task components's onToggle */}
      {/* Basically we are calling back the function from Task.jsx to App.jsx, linking this checkbox input to the onToggle function(toggleTaskStatus) */}
      {/* Letting us able to toggle true and false of the checkbox */}
      <span className={isDone ? "text-decoration-line-through" : ""}>{task}</span>
    </div>
  );
}

export default Task;