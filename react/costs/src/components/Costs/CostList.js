import CostItem from './CostItem';
import './CostList.css';

const CostList = (props) => {

    // let costContent = <p>There is no cost in this year!</p>;

    if(props.costs.length === 0){
        return <h2 className='cost-list__fallback'>
            There is no cost in this year!</h2>;
    };

    
    return (
        <ul className='cost-list'>
            {
                props.costs.map(cost => <CostItem 
                    key={cost.id}
                    date={new Date(cost.date)} 
                    description={cost.description}
                    price={cost.price} 
                />)
            }
        </ul>
    )
};

export default CostList;