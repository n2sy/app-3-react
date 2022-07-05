import './Depenses.css'
import FilterDepense from './FilterDepense';
import DepenseList from './DepenseList';
import { useState } from 'react';
import DepenseChart from './DepenseChart';

function Depenses(props) {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selYear) => {
        setSelectedYear(selYear);
    };

    const FilterDepenseList = props.listDep.filter((d) => d.date_d.getFullYear().toString() == selectedYear);

    return (
        <div className='expenses'>
            <FilterDepense allDep={props.listDep} selected={selectedYear} onChangeFilter={filterChangeHandler}></FilterDepense>
            <DepenseChart listDep={FilterDepenseList}></DepenseChart>
            <DepenseList listDep={FilterDepenseList}></DepenseList>
        </div>
    )
}
export default Depenses;