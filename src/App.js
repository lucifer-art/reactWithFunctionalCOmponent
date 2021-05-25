import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/Card/Card';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import ExpenseList from './components/ExpensesList/ExpensesList';

const dummyExpenses = [
  {id: 'e1',title: 'Car insuranse', amount: 799.78, date: new Date(2021, 5, 12)},
  {id: 'e2',title: 'Toilet paper', amount: 99.78, date: new Date(2021, 5, 12)},
  {id: 'e3',title: 'House Rent', amount: 1000.78, date: new Date(2021, 5, 12)},
  {id: 'e4',title: 'Food Expense', amount: 599.78, date: new Date(2021, 5, 12)},
]

function App() {

  const [expenses,setExpenses] = useState(dummyExpenses)
  const [filteredYear,setFilteredYear] = useState('2021');

  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }

  const filterChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Card className="expenses">
          <ExpenseFilter selectedFilter={filteredYear} addFilter={filterChangeHandler} />
          <ExpenseList items={expenses} year={filteredYear} />
        </Card>
      </header>
    </div>
  );
}

export default App;
