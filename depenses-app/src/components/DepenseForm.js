
import { useRef } from 'react';
import './DepenseForm.css'
import { useId } from 'react';

function DepenseForm(props) {
    const generatedId = useId();
    const refTitle = useRef();
    const refAmount = useRef();
    const refDate = useRef();

    function submitHandler(e) {
        e.preventDefault();
        let newDep = {
            id: generatedId,
            title: refTitle.current.value,
            amount: refAmount.current.value,
            date_d: new Date(refDate.current.value)
        }
        console.log(newDep);

        props.onAddExp(newDep);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" ref={refTitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" ref={refAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" ref={refDate}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Depense</button>

            </div>

        </form>

    )
}

export default DepenseForm;