import './Depenses.css'
import FilterDepense from './FilterDepense';
import DepenseList from './DepenseList';

function Depenses(props) {
    return (
        <div className='expenses'>
            <FilterDepense filterDep2={props.filterDep}></FilterDepense>
            <DepenseList listDep={props.listDep}></DepenseList>
        </div>
    )
}


export default Depenses;