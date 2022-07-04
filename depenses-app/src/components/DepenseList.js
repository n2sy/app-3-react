import Card from './Card';
import DepenseItem from './DepenseItem';
import classes from './DepenseList.module.css';

function DepenseList(props) {

    return (
        <Card className={classes.expenses_list}>
            <ol className={classes.expenses_list__fallback}>
                {props.listDep.map((dep) => {
                    return (<DepenseItem key={dep.id} oneDepense={dep}></DepenseItem>)
                })}
            </ol>
        </Card>
    )
}

export default DepenseList;