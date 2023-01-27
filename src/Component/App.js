import React, {useState} from "react";
import OrderList from "./OrderList";
import OrderButtonAddition from "./AddingOrderBtn";


function App() {
  const [foodOrderList, setFoodOrderList] = useState([]);
  function addFoodOrderList(newFoodList) {
      setFoodOrderList(prevfoodListNumber => {
        return [...prevfoodListNumber, newFoodList];
      })
  }
  
  return (
    
    
    <div>
    <OrderList/>
    <div>
    <OrderButtonAddition onPressed = {addFoodOrderList}/>
    </div>
    {foodOrderList.map((foodListNumber,index) => {
      <OrderList key={index} id={index}/>
    })}
    </div>
    
   

    
    
  );
   
}

export default App;
