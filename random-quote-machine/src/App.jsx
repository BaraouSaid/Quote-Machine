import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="wrapper" class="wrapper" style={{ backgroundColor: color }}>
        <div id="quote-box" className="quote-box">
          <div className="text">
            <i className="fas fa-quote-left" style={{ color: color }}></i>
            {quote && (
              <p id="text" style={{ color: color }}>
                {quote.quote}
              </p>
            )}
          </div>
          <div id="author" className="author">
            {quote && <small style={{ color: color }}>{quote.author}</small>}
          </div>
          <div class="new-quote">
            <button
              id="new-quote"
              onClick={this.getRandomIndex}
              style={{ backgroundColor: color }}
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
    </div>
  );
}

export default App;
