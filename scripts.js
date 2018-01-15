let quoteLib = require('./files/quotes');

let tag = document.getElementById('quote');
let randomQuote = Math.floor(Math.random() * quoteLib.quotes.length);

function getQuote() {
    tag.textContent = quoteLib.quotes[randomQuote].Quote;
};

window.onload = getQuote;