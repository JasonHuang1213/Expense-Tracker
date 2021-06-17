import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function ExpenseList(props) {
  const expenses = props.expenses;
   
  return (
    <Card className='expense-list'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  )
}

export default ExpenseList;