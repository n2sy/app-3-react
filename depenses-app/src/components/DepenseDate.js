
import classes from './DepenseDate.module.css';

function DepenseDate(props) {
    return <div className={classes.expense_date}>
        <div className={classes.expense_date__day}> {props.date.toLocaleString('en-us', { day: "numeric" })} </div>
        <div className={classes.expense_date__year}> {props.date.toLocaleString('en-us', { year: "numeric" })}</div>

        <div className={classes.expense_date__month}> {props.date.toLocaleString('en-us', { month: "long" })}</div>

    </div>
}

export default DepenseDate;