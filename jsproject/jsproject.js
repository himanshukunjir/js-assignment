var quotes = [
    '“Man needs his difficulties because they are necessary to enjoy success.” – A.P.J. Abdul Kalam',
    '“Depth of friendship does not depend on length of acquaintance.” – Rabindranath Tagore',
    '“The hunger for love is much more difficult to remove than the hunger for bread.” – Mother Teresa',
    '"Happiness is when what you think, what you say, and what you do are in harmony."- Mahatma Gandhi',
    '“You can change friends, but not neighbours.” – Atal Bihari Vajpayee',
    '“Comfort is no test of truth. Truth is often far from being comfortable.” – Swami Vivekananda',
   
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
