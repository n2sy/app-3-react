
import { useState } from 'react';
import './FilterDepense.css';
function FilterDepense(props) {
    function selectHandler(event) {
        //console.log(event.target.value);
        props.onChangeFilter(event.target.value);

    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='id'>Filter By Year</label>
                <select id="year" value={props.selected} onChange={selectHandler}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    {/* {props.listFilterDep.map((d) => {
                        return <option key={d.id} value={d.date_d.getFullYear().toString()}>{d.date_d.getFullYear().toString()}</option>
                    })} */}
                </select>
            </div>
        </div>

    )
}

export default FilterDepense;