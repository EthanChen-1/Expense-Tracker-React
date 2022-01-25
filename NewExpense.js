import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

export default function NewExpense({onAddExpense}) {

  const[isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredData){
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    console.log(expenseData);
    onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler(){
    setIsEditing(true);
  }

  function stopEditingHandler(){
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler}/>}
    </div>
  );
}
