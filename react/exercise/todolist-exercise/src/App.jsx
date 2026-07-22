import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoLForm"

function App() {
  return (
    <>
      <div className="card rounded shadow-sm" style={{maxWidth: "500px", margin: "60px auto"}}>
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>

          <TodoList />

          <AddTodoForm />

        </div>
      </div>
    </>
  )
}

export default App
