/*      Event Handlers
Most important Event handlers

- onChange
- onClick


*/



function Event({ task,  }) {
    
    function deleteHandler() {
        console.log("Delete" + task[0] )
    }
    
    
    return(
    <>   
    <div className="todo-item">
        <h2>{task}</h2>
        <p></p>
        <button onClick={() =>{
            deleteHandler()
        }}>
         Delete
        </button>
    </div>
    </>
)
}

export default Event