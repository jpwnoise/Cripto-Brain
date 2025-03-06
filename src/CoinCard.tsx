import { Typography } from '@mui/material';
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CoinChart from './CoinChart';
import './Animations.sass'

interface CoinCardProps {
    coin: any;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
    const getRandomColor = () => {
        const randomValue = () => Math.floor(Math.random() * 256);
        return `rgba(${randomValue()}, ${randomValue()}, ${randomValue()},.1)`;
    };
    const renderValueWithTooltip = (displayValue: React.ReactNode, tooltipText: string) => (
        <Typography sx={{ color: "rgb(210,210,210)" }} title={tooltipText} component="div"> {/* Añadido component="div" */}
            {displayValue}
        </Typography>
    );

    return (    
        <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem',
            border: '1px solid rgba(255,255,255,.3)',
            padding: '1rem',
            borderRadius: '.5rem',
            backgroundColor: getRandomColor()
            }}
            className='fade-in'
            >
            <img src={coin.image} alt="cripto imagen" width={'50px'} style={{ display: 'block' }} />
            <Typography sx={{ color: "rgb(210,210,210)" }}>{coin.name} ({coin.symbol.toUpperCase()})</Typography>

            {renderValueWithTooltip(`Capitalización de mercado: $${coin.market_cap.toLocaleString()}`, 'Capitalización de mercado actual.')}
            {renderValueWithTooltip(`Cambio en 24h: ${coin.price_change_percentage_24h.toFixed(2)}%`, 'Cambio porcentual en las últimas 24 horas.')}
            {renderValueWithTooltip(`Alto 24h: $${coin.high_24h}`, 'Precio más alto en las últimas 24 horas.')}
            {renderValueWithTooltip(`Bajo 24h: $${coin.low_24h}`, 'Precio más bajo en las últimas 24 horas.')}
            {renderValueWithTooltip(`ATH: $${coin.ath} (${coin.ath_change_percentage.toFixed(2)}%)`, 'Precio más alto de todos los tiempos.')}
            {renderValueWithTooltip(`ATL: $${coin.atl} (${coin.atl_change_percentage.toFixed(2)}%)`, 'Precio más bajo de todos los tiempos.')}
            {renderValueWithTooltip(`Volumen total: $${coin.total_volume.toLocaleString()}`, 'Volumen total de transacciones.')}
            {renderValueWithTooltip(
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AttachMoneyIcon sx={{ color: 'rgb(210,210,210)', verticalAlign: 'middle' }} />
                    {coin.current_price} USD
                </div>, 'Precio actual.')}

            <CoinChart coinId={coin.id} />
        </div>
    );
}

export default CoinCard;