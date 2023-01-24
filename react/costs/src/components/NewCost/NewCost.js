import "./NewCost.css";
import CostForm from "./CostForm";
import React, {useState} from "react";

const NewCost = (props) => {

    const [isCostFormVisible, setCostFormVisible] = useState(false);

    const saveCostDataHandler = (inputData) => {
        const costData = {
            ...inputData,
            id: Math.random.toString(),
        };

        props.onAddCostData(costData);
        setCostFormVisible(false);
        // console.log(costData);
    };

    const inputCostDataHandler = () => {
        setCostFormVisible(true);
    };

    const cancelInputDataHandler = () => {
        setCostFormVisible(false);
    }

    return(
        <div className="new-cost">
            {!isCostFormVisible && <button onClick={inputCostDataHandler}>Add new cost</button>}
            {/* <button>Add new cost</button> */}
            {isCostFormVisible && 
                <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelInputDataHandler}/>
            }
        </div>
    );
}

export default NewCost;