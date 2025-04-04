function Popup({ task }){
    return (
    <>
        <div>
            <div className="popup">
                <span>{ task }</span>
                <div className="popup_btns">
                    <button className="popup-btn" onClick={() =>{
                        console.log("Confirm Btn Clicked")
                    }}>Confirm</button>
                    <button className="popup_btn" onClick={() =>console.log("Cancel Btn Clicked")}>
                        Cancel
                    </button>
                    <input onChange={(e) => {
                        console.log(e.target.value)
                    }}/>
                </div>
            </div>
            <div className="backdrop"></div>
        </div>
    </>
    // IN Btn with CAncel 
    // it is onclick call shortCut
    // it is onClick{() => concole.log(" YO")}
    )
}

export default Popup