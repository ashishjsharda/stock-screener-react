import axios  from "axios";
const API_URL ='https://www.alphavantage.co/query';
const API_KEY='YOUR_API_KEY';

export const fetchStocks =async (filters) =>{
    try {
        const {marketCapMin, marketCapMax} = filters;
        const response = await axios.get(API_URL, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: 'IBM',
                apikey: API_KEY

            },
        });
        const data = response.data['Time SERIES (DAILY)'];
        const stocks = Object.keys(data).map(date => ({
            date,
            symbol: 'IBM',
            price: data[date]['4.close'],
        })).filter(stock => {
            if (marketCapMin && stock.marketCap < marketCapMin) return false;
            if (marketCapMax && stock.marketCap > marketCapMax) return false;
            return true;
        });
        return stocks;
    }catch (error)
    {
        console.error('Error fetching stocks',error);
        throw error;
    }


};