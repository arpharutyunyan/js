import "./CostForm.css";
import React, { useState } from 'react';

const CostForm = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputPrice, setInputPrice] = useState('');

    // const [userInput, setUserInput] = useState(
    //     {
    //         title: '',
    //         date: '',
    //         price: '',
    //     }
    // );

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });
        // setUserInput((previouseState) => {
        //     return ({
        //         ...previouseState,
        //         title: event.target.value,
        //     });
        // });
    };

    const priceChangeHandler = (event) => {
        setInputPrice(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     price: event.target.value,
        // })
    };

    const dateChangeHandler = (event) => {

        setInputDate(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputTitle,
            date: inputDate,
            price: inputPrice
        };

        setInputDate("");
        setInputPrice("");
        setInputTitle("");

        props.onSaveCostData(costData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Title</label>
                    <input value={inputTitle} type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Price</label>
                    <input value={inputPrice} onChange={priceChangeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input value={inputDate} onChange={dateChangeHandler} type="date" min='2019-01-01' step='2023-12-31'/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Add cost</button>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
        
    );
}

export default CostForm;