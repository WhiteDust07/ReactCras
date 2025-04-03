// REact Components
// Two steps to using components;

// 1. Creating a component
// 2. Using a component

function Todo() {
    return (
        <>
            <div className="todo-item">
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
                
            </div>
            <div className="todo-item">
                <h2>
                    Finish Project
                </h2>
                    <button>
                        Delete
                    </button>
                
            </div>
        </>
    )
}
export default Todo