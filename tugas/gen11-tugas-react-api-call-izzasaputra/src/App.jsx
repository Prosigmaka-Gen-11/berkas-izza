import axios from "axios";
import { useState } from "react";

function App() {
  const [bank, setBank] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardType, setCardType] = useState("");
  const [code, setCode] = useState("");
  const [rate, setRate] = useState("");

  async function getApiAsyncAwait() {
    const bankData = await axios.get(
      "https://random-data-api.com/api/v2/banks"
    );
    const cardData = await axios.get(
      "https://random-data-api.com/api/v2/credit_cards"
    );

    setBank(bankData.data.bank_name);
    setCardNumber(cardData.data.credit_card_number);
    setCardExp(cardData.data.credit_card_expiry_date);
    setCardType(cardData.data.credit_card_type);
  }

  function getApiThenCatch() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(function (response) {
        setCode(response.data.bpi.USD.code);
        setRate(response.data.bpi.USD.rate);
      })
      .catch(function (error) {
        alert(error);
      });
  }

  return (
    <div>
      <div>
        <div>
          <h1>Data Bank Generator</h1>
          <p>Nama Bank : {bank}</p>
        </div>
        <div>
          <h1>Infromasi Kartu Random</h1>
          <p>Nomor Kartu : {cardNumber}</p>
          <p>Expired kartu : {cardExp}</p>
          <p>Type Kartu : {cardType}</p>
        </div>
        <button onClick={getApiAsyncAwait}>Tampilkan</button>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h1>Rate Mata Uang</h1>
        <p>Code : {code}</p>
        <p>Rate : {rate}</p>
        <button onClick={getApiThenCatch}>Tampilkan</button>
      </div>
    </div>
  );
}

export default App;
