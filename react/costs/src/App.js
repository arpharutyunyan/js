import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2022, 0, 19),
    description: "Refrigerator",
    price: 999.99 
  },

  {
    id: 'c2',
    date: new Date(2021, 3, 22),
    description: "Car",
    price: 4699.99 
  },

  {
    id: 'c3',
    date: new Date(2019, 5, 22),
    description: "Iphone 12",
    price: 1199.99 
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostDataHandler = (inputData) => {
    setCosts((prevCosts) => {
      return [inputData, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCostData={addCostDataHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
