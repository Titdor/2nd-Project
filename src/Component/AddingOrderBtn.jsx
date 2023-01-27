
import React from "react";


function OrderButtonAddition(props) {
    return (
    <button className="addingOrder" type="Submit" onClick={() => {
            props.onPressed();
        }}>Add</button>
        
    );
      
}

export default OrderButtonAddition;