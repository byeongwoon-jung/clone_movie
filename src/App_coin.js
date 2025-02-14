import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState(0);
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChangeInput = (event) => setMoney(event.target.value);
  const onChangeSelect = (event) => setCoinPrice(event.target.value);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? "loading..." : null}
      <hr />
      <select value={coinPrice} onChange={onChangeSelect}>
        <option>Please Select Coins</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <br />
      <br />
      <input
        onChange={onChangeInput}
        var={money}
        type="text"
        placeholder="Write your money : USD"
      />
      <div>You Can Buy {coinPrice === 0 ? 0 : money / coinPrice} Coin</div>
    </div>
  );
}

export default App;
