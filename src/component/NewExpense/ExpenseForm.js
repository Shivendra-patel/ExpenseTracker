import React,{useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler =(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler =(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault(); //This method is used to prevent the defualt nature in this case the page will not reload when form is submitted.
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle(''); //two way binding is used to clear the field in form when submit is clicked.
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
        </form>
    );
}

export default ExpenseForm;