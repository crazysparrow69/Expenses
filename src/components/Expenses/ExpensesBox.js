import './ExpensesBox.css';
import Card from '../UI/Card';
import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ExpensesBox = (props) => {
  const [filter, setFilter] = useState('2020');

  const setFilterHandler = (params) => {
    setFilter(params);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onFilter={setFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default ExpensesBox;