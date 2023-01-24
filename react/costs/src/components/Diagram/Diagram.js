import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value);

    const maxMonthCosts = Math.max(...dataSetsValues);

    return (
        <div className="diagram">
            {props.dataSets.map((dataSet) => (
                    <DiagramBar 
                        key={dataSet.label}
                        value={dataSet.value} 
                        label={dataSet.label} 
                        maxValue={maxMonthCosts}
                    />
                ))
            }   
        </div>
    );
};

export default Diagram;