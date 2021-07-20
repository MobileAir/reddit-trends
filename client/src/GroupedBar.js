import React, { useEffect, useState, useContext } from 'react';
import { Bar } from '@reactchartjs/react-chart.js';
import {Context} from './context';

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

const colorNames = [
    "rgb(255, 0, 255)",
    "rgb(240, 230, 140)",
    "rgb(124, 252, 0)",
    "rgb(70, 130, 180)",
]

const GroupedBar = ({loading}) => {
    const {id} = useContext(Context);
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`/trends/id/${id}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (!result || !result.length) {
                    loading(false);
                    return;
                }
                const resultData = JSON.parse(result[0].data);
                const tickers = Object.keys(resultData.scores);
                // assume all data is structured consistently.
                const trackingKeys = Object.keys(resultData.scores[tickers[0]]);
                const datasets = trackingKeys.map((key, index) => {
                    return {
                        label: key,
                        data: tickers.map(ticker => resultData.scores[ticker][key]),
                        backgroundColor: colorNames[index]
                    }
                })
                setData({ labels: tickers, datasets });
                loading(false);
            });
    }, [id])
    return <Bar data={data} width={null} height={null} options={options} />;
}

export default GroupedBar
