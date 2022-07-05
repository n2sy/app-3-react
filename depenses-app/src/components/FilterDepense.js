
import { useState } from 'react';
import './FilterDepense.css';
function FilterDepense(props) {
    function selectHandler(event) {
        //console.log(event.target.value);
        props.onChangeFilter(event.target.value);

    }
    let listYears = [];
    for (const dep of props.allDep) {
        listYears.push(dep.date_d.getFullYear().toString());
    }
    let listYearsUnique = [... new Set(listYears)];


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='id'>Filter By Year</label>
                <select id="year" value={props.selected} onChange={selectHandler}>
                    {/* <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option> */}
                    {listYearsUnique.map((d) => {
                        return <option key={d} value={d}>{d}</option>
                    })}
                </select>
            </div>
        </div>

    )
}

export default FilterDepense;