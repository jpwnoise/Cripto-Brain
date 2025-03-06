import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Animations.sass';

import worldcoinChart from './criptocoins/worldcoin_market_chart.json';
import bitcoinChart from './criptocoins/bitcoin_market_chart.json';
import ethereumChart from './criptocoins/ethereum_market_chart.json';
import binanceChart from './criptocoins/binancecoin_market_chart.json';
import rippleChart from './criptocoins/ripple_market_chart.json';
import solanaChart from './criptocoins/solana_market_chart.json';
import cardanoChart from './criptocoins/cardano_market_chart.json';
import dogeChart from './criptocoins/dogecoin_market_chart.json';
import tetherChart from './criptocoins/tether_market_chart.json';
import tronChart from './criptocoins/tron_market_chart.json';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface CoinChartProps {
    coinId: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill: boolean;
        borderColor: string;
        tension: number;
    }[];
}

interface MarketChartData {
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}

interface ErrorData {
    status: {
        error_code: number;
        error_message: string;
    };
}

const coinCharts: { [key: string]: MarketChartData | ErrorData } = {
    'bitcoin': bitcoinChart,
    'ethereum': ethereumChart,
    'ripple': rippleChart,
    'tether': tetherChart,
    'binancecoin': binanceChart,
    'solana': solanaChart,
    'cardano': cardanoChart,
    'dogecoin': dogeChart,
    'tron': tronChart,
    'worldcoin': worldcoinChart,
};

const CoinChart: React.FC<CoinChartProps> = ({ coinId }) => {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const selectedChart = coinCharts[coinId];

        if (selectedChart) {
            if ('prices' in selectedChart) {
                const prices: number[][] = selectedChart.prices;
                const labels: string[] = prices.map(price => new Date(price[0]).toLocaleDateString());
                const data: number[] = prices.map(price => price[1]);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: 'Precio (USD)',
                        data: data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                    }],
                });
            } else {
                setChartData(null);
            }
        }
    }, [coinId]);

    if (!chartData && coinCharts[coinId] && 'prices' in coinCharts[coinId]) {
        return <p>Cargando gráfico...</p>;
    }

    if (!chartData && (!coinCharts[coinId] || !('prices' in coinCharts[coinId]))) {
        return <p>Error al cargar el gráfico.</p>;
    }

    return (
        <div style={{ width: '80%', margin: '2rem auto' }} className='fade-in'>
            {chartData && <Line data={chartData} />} {/* Renderización condicional */}
        </div>
    );
};

export default CoinChart;