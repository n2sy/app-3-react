import { useId } from "react";
import DepenseForm from './DepenseForm';
import './NewDepense.css';

function NewDepense(props) {
    //  let id = useId();
    return (
        <div className="new-expense">
            <DepenseForm onAddExp={props.onAddNewDepense}></DepenseForm>
        </div>

    )
}

export default NewDepense;