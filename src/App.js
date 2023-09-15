import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [quotes, setQotes] = useState("");
  const [quotesTR, setQotesTR] = useState("");

  const getQotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQotes(data[randomNum]);
      });
  };

  const getQotesTR = () => {
    fetch("https://tr.wikiquote.org/wiki/T%C3%BCrk%C3%A7e_atas%C3%B6zleri/A")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQotesTR(data[randomNum]);
      });
  };

  useEffect(() => {
    getQotes();
  }, []);

  useEffect(() => {
    getQotesTR();
  }, []);

  return (
    <div className="App">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQotes} className="btn">
            {" "}
            Get Qoute
          </button>
          <button onClick={getQotesTR} className="btn">
            {" "}
            Translate TR
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
