const Todo = (props) => {
    const todoClasses = ["bold", "italic"];

    if (props.todo.complete) {
        todoClasses.push("line-through")
    }
        
    return (
    <div>
        <input onChange={(e) => { props.handleToggleComplete(props.i) }} checked={props.todo.complete} type="checkbox" />

        <span class={todoClasses.join(" ")}>{props.todo.text}</span>

        <button onClick={(e) => { props.handleToDoDelete(props.i); }} style={{ marginLeft: "15px" }}>
            Delete
        </button >
    </div>);
}

export default Todo;