import Charts from "./Charts/Charts";



function DepenseChart(props) {
    const ChartDataPoints = [
        { label: 'JAN', value: 0 },
        { label: 'FEB', value: 0 },
        { label: 'MAR', value: 0 },
        { label: 'APR', value: 0 },
        { label: 'MAY', value: 0 },
        { label: 'JUN', value: 0 },
        { label: 'JUL', value: 0 },
        { label: 'AUG', value: 0 },
        { label: 'SEP', value: 0 },
        { label: 'OCT', value: 0 },
        { label: 'NOV', value: 0 },
        { label: 'DEC', value: 0 },
    ];

    for (const dep of props.listDep) {
        ChartDataPoints[dep.date_d.getMonth()].value += +dep.amount;

    }
    return (
        <div>
            <Charts dataPoints={ChartDataPoints}></Charts>

        </div>
    )
}

export default DepenseChart;