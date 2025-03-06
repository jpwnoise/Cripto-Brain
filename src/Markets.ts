import Markets from './criptocoins/markets.json';

console.log(Markets);

const filterCoinList  = ['worldcoin',
                         'bitcoin',
                         'ethereum',
                         'binancecoin', 
                         'cardano', 
                         'doge', 
                         'tron', 
                         'usd-coin', 
                         'ripple', 
                         'tether', 
                         'solana'];

const filteredMarkets = Markets.filter((market) => {
    return filterCoinList.includes(market.id);
});

export default filteredMarkets; 