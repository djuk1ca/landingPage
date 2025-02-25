import { Doughnut } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    registerables,
    ArcElement,
    Tooltip,
    Legend
 } from "chart.js";

ChartJS.register(
    ...registerables,
    ArcElement,
    Tooltip,
    Legend
)

export default function DoughnutChart({size, score, textSize}){
    const data = {
        labels: [],
        datasets: [
            {
                label: 'Score',
                data: [score, 100-score],
                backgroundColor: ['#EFED0B', 'rgba(239, 237, 11, 0.2)'],
                hoverOffset: 4,
                border: 0,
                borderRadius: 10,
                borderWidth: 0,
                cutout: '80%',
                rotation: 180,
            },
        ],
    }
    
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: true,
            },
        },
    }

    const doughnutLabel = {
        id: 'doughnutLabel',
        afterDatasetsDraw(chart, args, plugins){
            const { ctx, data } = chart;
            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            ctx.save();
            ctx.backgroundColor = ''
            ctx.font = `bold ${textSize}px sans-serif`;
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(`B-`, centerX, centerY);
        }
    }

    return (
        <div style={{width: `${size / 4.0}rem`, height: `${size / 4.0}rem`}}>
            <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
        </div>
    )
}