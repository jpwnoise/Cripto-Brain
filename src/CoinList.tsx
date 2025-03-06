import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import filteredMarkets from './Markets';
import './Animations.sass'

interface CoinListProps {
    handleSelectCoin:(coin:any)=>undefined|void; 
}

const CoinList:React.FC<CoinListProps> = ({handleSelectCoin})=>{

    /*const [coinList, setCoinList] = useState<any>([])
    
    useEffect(()=>{
        //las 10 más populares 🌟
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((result)=>{
            return result.json();
        })
        .then((data) => {
            console.log(data)
            setCoinList(data);
        })
    },[])*/

    return (<div style={{display:'flex', justifyContent:'center'}} className='fade-in'>
    {filteredMarkets.map((coin:any, index)=>{
        return <Button  className='fade-in' variant="contained" key={coin.id} style={{color:'white', margin:'.25rem', animationDelay: `${index * 0.1}s`}} onClick={()=>{handleSelectCoin(coin)}}>
            <img src={coin.image} alt={'cryto imagen'} width={'30px'} style={{backgroundColor:'black'}}/>
            {coin.name}
            </Button>
    }) }
    </div>);
}

export default CoinList;