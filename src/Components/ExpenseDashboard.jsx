// ExpenseDashboard.jsx
import React, { useContext } from 'react';
import { ProjectContext } from './ProjectContext';
import ExpenseCard from './ExpenseCard';
import ListContainer from './ListContainer';

const ExpenseDashboard = () => {
  const { expenses } = useContext(ProjectContext);

  return (
    <ListContainer
      title="Expenses List"
      items={expenses}
      renderItem={(expense) => <ExpenseCard key={expense.id} expense={expense} />}
      emptyMessage="No expenses found."
    />
  );
};

export default ExpenseDashboard;

