// ======================================= Component Exercise =======================================

// import TodoItem from "./TodoItem"

// function TodoList(){
//     return(
//         <ul className="list-group">
//             <TodoItem task_name="Task 1" task_done={true} />
//             <TodoItem task_name="Task 2" task_done={false} />
//             <TodoItem task_name="Task 3" task_done={false} />
//         </ul>
//     )
// }

// export default TodoList

// ======================================= Component Exercise =======================================

// ================================ State & Event Handling Exercise =================================

import TodoItem from "./TodoItem";

function TodoList({ todos, toggleIsCompleted, deleteTodo }) {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem key={todo.id} task_id={todo.id} task_name={todo.label} task_done={todo.isCompleted} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;

// ================================ State & Event Handling Exercise =================================
