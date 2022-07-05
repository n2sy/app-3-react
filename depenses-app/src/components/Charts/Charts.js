import ChartBar from './ChartBar';
import './Charts.css';

function Charts(props) {

    let DataPointsValues = props.dataPoints.map((dp) => dp.value);
    let MaxValue = Math.max(...DataPointsValues);


    console.log(DataPointsValues);
    return (
        <div className='chart'>
            {props.dataPoints.map((dp) => {
                return <ChartBar key={dp.label}
                    value={dp.value}
                    maxValue={MaxValue}
                    label={dp.label}></ChartBar>
            })}

        </div>
    )
}

export default Charts;