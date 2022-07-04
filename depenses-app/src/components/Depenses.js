import './Depenses.css'
import FilterDepense from './FilterDepense';
import DepenseList from './DepenseList';
import { useState } from 'react';

function Depenses(props) {

    const [selectedYear, setSelectedYear] = useState('2020');

    const filterChangeHandler = (selYear) => {
        setSelectedYear(selYear);
    };

    const FilterDepenseList = props.listDep.filter((d) => d.date_d.getFullYear().toString() == selectedYear);

    return (
        <div className='expenses'>
            <FilterDepense selected={selectedYear} onChangeFilter={filterChangeHandler}></FilterDepense>
            <DepenseList listDep={FilterDepenseList}></DepenseList>
        </div>
    )
}
export default Depenses;