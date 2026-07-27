import { useState } from "react";
import Task from "./component/Task";
import NoTasksFound from "./component/NoTasksFound";

function App() {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, text: "First Task", isDone: false },
        { id: 2, text: "Second Task", isDone: false },
    ]);

    const [filter, setFilter] = useState("all");

    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleFilterChange = (newFilter) => {
        console.log(newFilter);
        setFilter(newFilter);
    };

    let displayedTasks;
    // Switch Case is like a IfElse things, looking for the changes
    // The changes it's looking for it the task being done or not but in this switch case it's looking for the "Done" and "Undone" in handleFilterChange
    switch (filter) {
        case "Done":
            displayedTasks = tasks.filter((task) => task.isDone);
            break;
        case "Undone":
            displayedTasks = tasks.filter((task) => !task.isDone);
            break;
        default:
            displayedTasks = tasks;
    }

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit task logic goes here
        setTasks([
            ...tasks,
            { id: tasks.length + 1, text: taskInput, isDone: false }, // id: the length of the array + 1, text : Whatever you put for taskInput, isDone: not done(false)
        ]);
        console.log(task);
        setTaskInput("");
    };

    const toggleTaskStatus = (id) => {
        console.log(id);
        setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
        // This function is mapping out all the task => checking the task.id, if it's on the same id it'll render the taskInput back AND showing it as the task is done
        // A function that's flipping the true and false
    };

    return (
        <div className="container">
            <h1 className="text-center my-3 text-dark">Task Manager</h1>

            <button onClick={() => setIsFormVisible(!isFormVisible)} className="btn btn-secondary mb-3">
                {isFormVisible ? "Hide Form" : "Show Form"}
            </button>

            {isFormVisible && (
                <form onSubmit={handleSubmit} className="mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add a task..." value={taskInput} onChange={handleInputChange} />
                        <button className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            )}

            <div className="d-flex justify-content-center mb-3">
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={() => handleFilterChange("All")}>
                        All
                    </button>
                    <button className="btn btn-success" onClick={() => handleFilterChange("Done")}>
                        Done
                    </button>
                    <button className="btn btn-danger" onClick={() => handleFilterChange("Undone")}>
                        Undone
                    </button>
                </div>
            </div>

            {/* Task components will go here, using .map() as the forEach loop to render out all the task in Task */}
            {/* If the Tasks length is more than 0, meaning having at least one or two tasks, it will render all the tasks */}
            {/* Using turnery operator to render out */}
            {displayedTasks.length > 0 ? (
                displayedTasks.map((task) => (
                    <Task key={task.id} task={task.text} isDone={task.isDone} onToggle={() => toggleTaskStatus(task.id)} />
                    // the key is like an index and the task has to render out the text(textInput), and isDone(false)
                    // The onToggle={() => toggleTaskStatus(task.id)} it cause the function above(toggleTaskStatus), the function is about updating the task is done or not
                ))
            ) : (
              // If the task length is 0 or less(If possible XD) it'll render out the NoTasksFound.jsx code saying "there's no task found"
                <NoTasksFound />
            )}
        </div>
    );
}

export default App;
