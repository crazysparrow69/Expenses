import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react';

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = () => {
    setDisplayForm(true);
  };

  const cancelHandler = () => {
    setDisplayForm(false);
  };

  return (
    <div className='new-expense'>
      {!displayForm && <button onClick={addExpenseHandler}>Add new expense</button>}
      {displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  )
};

export default NewExpense;