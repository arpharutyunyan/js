import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const yearChangeHandle = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => {
        return (
            new Date(cost.date).getFullYear().toString() === selectedYear
        );
    });

    
    return(
        
        <Card className='costs'>
            <CostFilter year={selectedYear} onChangeYear={yearChangeHandle}/>
            <CostDiagram costs={filteredCosts}/>
            <CostList costs={filteredCosts}/>
        </Card>
    )
}

export default Costs;
