import React, { useState, useEffect} from "react";
import './App.css';
import ExpenseList from "./Expenses/ExpenseList";
import NewExpense from './NewExpense/NewExpense'

const localstoragekey = "keytothestorage";

const DUMMY_DATA = [
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  useEffect(()=>{
    const storedItems = JSON.parse(localStorage.getItem(localstoragekey));
    for(const items of storedItems){
      items.date = new Date(items.date);
    }
    setExpenses(storedItems);
  },[])

  useEffect(()=>{
    localStorage.setItem(localstoragekey, JSON.stringify(expenses));
  },[expenses]);


  function addExpenseHandler(newExpense){
    setExpenses((prevExpense) => {
      return([newExpense,...prevExpense]);
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
