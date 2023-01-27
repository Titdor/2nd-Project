import React from "react";


function FoodOrderList(props) {
    return (
        <li onClick={() => {
            props.onCheck(props.id);
        }}>{props.text}</li>
    );
}


export default FoodOrderList;