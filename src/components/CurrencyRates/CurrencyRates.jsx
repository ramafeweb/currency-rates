import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../style';

const CurrencyRates = () => {
  const [rates, setRates] = useState([]);
  const [date, setDate] = useState('');
  const [base, setBase] = useState('');

  function convertToLocaleDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const localDate = date.toLocaleDateString('id-ID', options);

    return localDate;
  }

  useEffect(() => {
    const apiKey = '5d25a6c442514e4182daca6b8985f227';
    const apiUrl = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.rates;
        const date = convertToLocaleDate(response.data.date);
        const base = response.data.base;
        const currencyList = [
          { currency: 'CAD', exchangeRate: data.CAD },
          { currency: 'IDR', exchangeRate: data.IDR },
          { currency: 'JPY', exchangeRate: data.JPY },
          { currency: 'CHF', exchangeRate: data.CHF },
          { currency: 'EUR', exchangeRate: data.EUR },
          { currency: 'GBP', exchangeRate: data.GBP },
        ];

        const formattedRates = currencyList.map((currency) => ({
          ...currency,
          weBuy: (currency.exchangeRate * 1.05).toFixed(4),
          weSell: (currency.exchangeRate * 0.95).toFixed(4),
        }));

        setRates(formattedRates);
        setDate(date);
        setBase(base);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section id="currency" className={`text-white flex flex-col ${styles.paddingY}`}>
      <h2 className="text-center text-3xl font-bold py-5">Currency Rates</h2>
      <h3 className="text-center mb-5 text-xl">{date}</h3>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border border-white p-2 text-white">Currency</th>
            <th className="border border-white p-2 text-white">We Buy</th>
            <th className="border border-white p-2 text-white">Exchange Rate</th>
            <th className="border border-white p-2 text-white">We Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td className="border border-white p-2 text-white">{rate.currency}</td>
              <td className="border border-white p-2 text-white">
                {Number(rate.weBuy).toLocaleString('id')}
              </td>
              <td className="border border-white p-2 text-white">{rate.exchangeRate}</td>
              <td className="border border-white p-2 text-white">
                {Number(rate.weSell).toLocaleString('id')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center text-xl my-5">Rates are based from 1 {base}</p>
    </section>
  );
};

export default CurrencyRates;
