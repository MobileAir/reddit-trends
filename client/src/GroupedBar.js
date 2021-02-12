import React, { useEffect, useState } from 'react';
import { Bar } from '@reactchartjs/react-chart.js';

const options = {
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
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('/trends/1')
            .then(response => response.json())
            .then(result => {
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
    }, [])
    return <Bar data={data} options={options} />;
}

export default GroupedBar
