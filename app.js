const quotes = [
    {
        name: 'Stephen King',
        quote: 'GEt busy living or get busy dying.'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greately.'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'Im a success today because I had a friend who beleived in me and I did not have the heart to let him down.'
    },
    {
        name: 'Stephen King',
        quote: 'GEt busy living or get busy dying.'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greately.'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'Im a success today because I had a friend who beleived in me and I did not have the heart to let him down.'
    },
    {
        name: 'Stephen King',
        quote: 'GEt busy living or get busy dying.'
    },
    {
        name: 'John F.Kennedy',
        quote: 'Those who dare to fail miserably can achieve greately.'
    },
    {
        name: 'Abraham Lincoln',
        quote: 'Im a success today because I had a friend who beleived in me and I did not have the heart to let him down.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}