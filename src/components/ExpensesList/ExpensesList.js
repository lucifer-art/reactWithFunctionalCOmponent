import './ExpensesList.css';
import Expenseitem from '../ExpenseItem/ExpenseItem';
import ExpensesChart from '../ExpensesChart';

const ExpensesList = props => {
    let expenseItem = null;
    let filteredExpenseItems = null;

    if (Array.isArray(props.items) && props.items.length) {
        expenseItem = props.items.filter((expense) => {
          return expense.date.getFullYear().toString() === props.year;
        })
      }
    if (Array.isArray(expenseItem) && expenseItem.length) {
        filteredExpenseItems = expenseItem.map(expense => {
            return <Expenseitem key={expense.id} date={expense.date} title={expense.title} price={expense.amount} />
        })
    }
    return (
        <div>
            <ExpensesChart expenses={expenseItem} />
            {expenseItem.length === 0 ? <p style={{color:'#fff'}}>No items found</p> : filteredExpenseItems}
        </div>
    )
}

export default ExpensesList;