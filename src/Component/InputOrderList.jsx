import React, {useState} from "react";

function InputOrderList(props) {
    const [foodOrderInput, setFoodOrderInput] = useState("");
  function handleChange(event) {
   setFoodOrderInput(event.target.value);
  }
    return (
        <div className="form">
          <div>
          <input type="text" placeholder="Input Food Order" value={foodOrderInput} onChange={handleChange}></input>
          </div> 
          <div className="addingFoodInput">
          <button type="submit" onClick={()=> {
          props.onAdd(foodOrderInput);
          setFoodOrderInput("");
        }}>Add</button>
          </div>
        </div>
       );
}

export default InputOrderList;