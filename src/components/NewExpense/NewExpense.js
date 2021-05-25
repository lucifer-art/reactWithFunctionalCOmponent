import {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpence = (props) => {
    const [isEditing,setEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const startEditingHandler = () => {
        setEditing(true);
    }
    const stopEditingHandler = () => {
        setEditing(false);
    }

    return <div className="new-expense">
        {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler} /> : <button onClick={startEditingHandler}>Add New Expense</button>}
    </div>
}

export default NewExpence;