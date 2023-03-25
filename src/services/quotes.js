const QUOTE_RANDOM = 'http://api.quotable.io/random';

export const getRandomQuote = async ()=> {
    const res = await fetch(QUOTE_RANDOM)
    const data = await res.json()
    return {text: data.content, author: data.author}
}