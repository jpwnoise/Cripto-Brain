import './App.sass'
import TopBar from './TopBar';
import CoinList from './CoinList';
import { useState } from 'react';
import CoinCard from './CoinCard';
import SabiasQue from './SabiasQue';
import WorldCoin from './criptocoins/worldcoin.json'
import BitCoin from './criptocoins/bitcoin.json'
import Ethereum from './criptocoins/ethereum.json'
import Binance from './criptocoins/binancecoin.json'
import Ripple from './criptocoins/ripple.json'
import USDC from './criptocoins/usd-coin.json'
import Solana from './criptocoins/solana.json'
import Cardano from './criptocoins/cardano.json'
import Doge from './criptocoins/doge.json'
import Tether from './criptocoins/tether.json'
import Tron from './criptocoins/tron.json'
import { Button } from '@mui/material';
import Block from './BlockChainDescription';
import Parrafos from './Parrafos';
import HowToInvest from './HowToInvest';

const criptoCoins = [];

criptoCoins.push(WorldCoin);
criptoCoins.push(BitCoin);
criptoCoins.push(Ethereum);
criptoCoins.push(Binance);
criptoCoins.push(Ripple);
criptoCoins.push(USDC);
criptoCoins.push(Solana);
criptoCoins.push(Cardano);
criptoCoins.push(Doge);
criptoCoins.push(Tether);
criptoCoins.push(Tron);

function App() {

  console.log('world coin', WorldCoin);

  const openCoin = (coin: any) => {
    console.log(coin);
    setSelectedCoin(coin);
  }

  const [selectedCoin, setSelectedCoin] = useState<any | null>(null);
  const [option, setOption] = useState<string | null>(null);


  return (
    <div className='gradient-animation'>
      <TopBar />
      <SabiasQue />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem', backgroundColor: 'rgba(80,80,120,.1)' }}>
        <Button variant='outlined' style={{ margin: '.5rem' }} onClick={() => { setOption('coins') }}>Monedas populares</Button>
        <Button variant='outlined' style={{ margin: '.5rem' }} onClick={() => { setOption('block') }}>Que es blockchain</Button>
        <Button variant='outlined' style={{ margin: '.5rem' }} onClick={() => { setOption('invest') }}>Como invertir</Button>
        <Button variant='outlined' style={{ margin: '.5rem' }} onClick={() => { setOption('recomends') }}>Recomendaciones</Button>
      </div>
      {option === 'coins' &&
        <><CoinList handleSelectCoin={openCoin}  />
          { selectedCoin &&
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CoinCard key={selectedCoin.id} coin={selectedCoin} />
            </div>
          }
          </>
      }

      {option === 'block' && <>
        <h3 style={{ backgroundColor: 'rgb(0 0 0 / 20%)', padding: '1rem', borderRadius: '.5rem', color: 'rgb(102 181 181)' }}>
                    El blockchain, o cadena de bloques, es una tecnología que ha revolucionado la forma en que se registra y verifica la información. A grandes rasgos, es un libro de contabilidad digital, descentralizado y seguro, que registra transacciones de manera cronológica y transparente.
                    Para entenderlo mejor, aquí te explico los conceptos clave:
                </h3>
                {Parrafos.map((parrafo)=>{
                  return <Block title={parrafo.title} paragraph={parrafo}>{parrafo.paragraph}</Block>
                })}
      
      </>

      }
      {
        option === 'invest' && <HowToInvest/>
      }
    </div>
  )
}

export default App