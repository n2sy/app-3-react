import DepenseDate from './DepenseDate';
import classes from './DepenseItem.module.css';

function DepenseItem(props) {


    return (
        <div className={classes.expense_item}>
            <DepenseDate date={props.oneDepense.date_d}></DepenseDate>
            <div className={classes.expense_item__description}><h2>{props.oneDepense.title}</h2></div>
            <div className={classes.expense_item__price}>{props.oneDepense.amount}$</div>


        </div>
    )
}

export default DepenseItem;