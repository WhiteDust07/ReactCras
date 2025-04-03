// to change the task peramters we call The FUnction 
// PROSPS
// 
function Todo(props) {
    console.log(props.task.description)
    return (
        <>
            <h1>My Todos</h1>
                <div className="todo-item">
                    <h2>
                        {props.task}
                    </h2>
                    <h2>
                        {props.description}
                    </h2>
                        <button>
                            Delete
                        </button>
                    </div>
                
                {/* <div className="todo-item">
                    <h2>
                        Finish React Crash Course
                    </h2>
                        <button>
                            Delete
                        </button>
                    
                </div>
                <div className="todo-item">
                    <h2>
                        Finish ASAP</h2>
                        <button>
                            Delete
                        </button> 
                    
                </div>*/}
        </>
    )
}
export default Todo