import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotesData, setQuotesData] = useState({
    quote: '',
    author: '',
  });

  const [color, setColor] = useState('');

  let { quote, author } = quotesData;

  useEffect(() => {
    getQuotesData();
    getRandomColor();
  }, []);

  const getQuotesData = () => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuoteData = dataQuotes[randomNum];
        setQuotesData(({ quote, author } = randomQuoteData));
      });
  };

  const handleClick = () => {
    getQuotesData();
    getRandomColor();
  };

  const getRandomColor = () => {
    const randomCol = Math.floor(Math.random() * 16000000).toString(16);
    const color = `#${randomCol}`;
    setColor(color);
  };

  return (
    <div id="wrapper" class="wrapper" style={{ backgroundColor: color }}>
      <div id="quote-box" className="quote-box">
        <div className="text">
          <i className="fas fa-quote-left" style={{ color: color }}></i>
          {quotesData && (
            <p id="text" style={{ color: color }}>
              {quote}
            </p>
          )}
        </div>
        <div id="author" className="author">
          {quotesData && <small style={{ color: color }}>{author}</small>}
        </div>
        <div class="new-quote">
          <button
            id="new-quote"
            style={{ backgroundColor: color }}
            onClick={handleClick}
          >
            New quote
          </button>
        </div>
        <div id="share" className="share">
          <a
            href={
              quote &&
              `https://twitter.com/intent/tweet?text=${quote.quote}\n-${quote.author}`
            }
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            style={{ color: color }}
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
