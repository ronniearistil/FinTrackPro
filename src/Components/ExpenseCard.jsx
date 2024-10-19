import React from 'react';

const ExpenseCard = ({ expense }) => (
  <div>
    <h3>{expense.name}</h3>
    <p>Amount: ${expense.amount}</p>
  </div>
);

export default ExpenseCard;


