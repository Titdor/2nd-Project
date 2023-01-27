import React, {useState} from "react";

function ButtonOrderList(props) {
    return (
        <div><button type="submit" onSubmit={()=> {
            props.clickButton()
        }}>Add</button></div>
    );
}

export default ButtonOrderList;