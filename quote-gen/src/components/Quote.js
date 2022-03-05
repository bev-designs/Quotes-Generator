import React from 'react'
import { useState, useEffect } from 'react';


const Quotes = () => {

    const [quote, setQoute] = useState('');
    const [author, setAuhor] = useState('');

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        let quoteUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        fetch(quoteUrl)
         .then(res => res.json())
         .then(data => {
             let dataQuotes = data.quotes;
             let randomNum = Math.floor(Math.random() * dataQuotes.length);
            //  console.log(randomNum);

            let randomQuote = data.quotes[randomNum];
            // console.log(randomQuote);

            setQoute(randomQuote.quote)
            setAuhor(randomQuote.author)
         })
    }

    const handleClick = () => {
        getQuote();
    }

    return (
        <div>

            <div id="quote-box">
                <div id="text">
                    <i className="fa fa-quote-left"></i>
                </div>
  
                <div id="text">
                    <p>{quote}</p>
                </div>
  
                <div id="author">
                    <p>{author}</p>
                </div>
  
                <div className="tweet-quote">
   
                    <div id="tweet-quote">
                        <a href="https://twitter.com/intent/tweet"  target="_top">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
   
                    <div>
                        <button onClick={handleClick} id="new-quote">New Qoute</button>
                    </div>
                </div>
            
            </div>

            <p className="by">by bev-designs</p>

        </div>
    )
}
export default Quotes;