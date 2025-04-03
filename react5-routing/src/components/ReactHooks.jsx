//              REact Hooks
// - There are many react hooks , but the most important are:
//. useState
//  useEffect

//  useState
// useState is how we create variables in React
function ReactHooks({ tooglePopup, popupOff }){
    return(
    <>
    <div >
        <div onClick={popupOff}>
            <h1>React Hooks</h1>
            <button className="off " onClick={popupOff}>Popup off</button>
        </div>

        <div className="todo-item">
                <h2>
                    Finish React Crash Course
                </h2>
                    <button onClick={tooglePopup}>
                        Delete
                    </button>
                
            </div>
    </div >
    </>
    )
}


export default ReactHooks