import React,{useState} from 'react';
import Expenses from "./component/Expenses/Expenses";
import NewExpense from './component/NewExpense/NewExpense';

let dummy_expenses = [
  {
    id:1,
    title:'school fee',
    amount:250,
    date: new Date(2022,5,12)
  },
  {
    id:2,
    title:'ticket',
    amount:350,
    date: new Date(2022,6,12)
  },
  {
    id:3,
    title:'food',
    amount:1250,
    date: new Date(2022,7,12)
  },
  {
    id:4,
    title:'Books',
    amount:450,
    date: new Date(2022,5,6)
  }

];

function App() {
  const [expenses, setExpenses]=useState(dummy_expenses);
  

  const addExpenseHandler= (expense)=>{
    setExpenses([expense,...expenses]);
  };
  return (
    <div> 
      <NewExpense onAddExpense={addExpenseHandler}/>     
     <Expenses item={expenses}/>
    </div>
    
  );
}

export default App;
