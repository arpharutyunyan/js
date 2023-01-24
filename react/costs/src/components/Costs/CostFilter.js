import "./CostFilter.css";

const CostFilter = (props) => {

    const changeYearHandle = (event) => {
        props.onChangeYear(event.target.value);
    };
    
    return (
        <div className="cost-filter">
            <div className="cost-filter__control">
                <label>Filter by year</label>
                <select value={props.year} onChange={changeYearHandle}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default CostFilter;