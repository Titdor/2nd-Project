import React,{useState} from "react";
import FoodOrderList from "./FoodOrderList";
import InputOrderList from "./InputOrderList";



function OrderList() {
  const[foodOrder, setFoodOrder] = useState([]);
  function addFoodOrder(newFoodOrder) {
    setFoodOrder(prevFoodOrder => {
      return [...prevFoodOrder, newFoodOrder];
    });
  }

  function deleteFoodOrder(id) {
    setFoodOrder(prevFoodOrder => {
      return prevFoodOrder.filter((foodOrder, index) => {
        return index != id;
      });
    });
  }
    return (
      <div className="container">
      <InputOrderList onAdd={addFoodOrder}/> 
      <div><ul>{foodOrder.map((orderedFood, index) => (<FoodOrderList key={index} id={index} text={orderedFood} onCheck={deleteFoodOrder}/>))}</ul></div>
      </div>
    );
}

export default OrderList;