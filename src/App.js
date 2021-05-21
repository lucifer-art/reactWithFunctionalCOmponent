import React from 'react';

import Expenseitem from './components/ExpenseItem/ExpenseItem';
import Card from './components/Card/Card';

function App() {
  const expenses = [
    {id: 'e1',title: 'Car insuranse', amount: 799.78, date: new Date(2021, 5, 12)},
    {id: 'e2',title: 'Toilet paper', amount: 99.78, date: new Date(2021, 5, 12)},
    {id: 'e3',title: 'House Rent', amount: 1000.78, date: new Date(2021, 5, 12)},
    {id: 'e4',title: 'Food Expense', amount: 599.78, date: new Date(2021, 5, 12)},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's get started</h1>
        <p>This is also visible</p>
        <Card className="expenses">
          <Expenseitem date={expenses[0].date} title={expenses[0].title} price={expenses[0].amount} />
          <Expenseitem date={expenses[1].date} title={expenses[1].title} price={expenses[1].amount} />
          <Expenseitem date={expenses[2].date} title={expenses[2].title} price={expenses[2].amount} />
          <Expenseitem date={expenses[3].date} title={expenses[3].title} price={expenses[3].amount} />
        </Card>
      </header>
    </div>
  );
}

export default App;
