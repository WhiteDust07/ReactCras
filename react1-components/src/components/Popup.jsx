function Popup({ props }){
    return (
    <>
        <div>
            <div className="popup">
                <span>{ task }</span>
                <div className="popup_btns">
                    <button className="popup-btn">Confirm</button>
                    <button className="popup_btn popup_btn--cancel">
                        Cancel
                    </button>
                </div>
            </div>
            <div className="backdrop"></div>
        </div>
        
    </>
    )
}

export default Popup