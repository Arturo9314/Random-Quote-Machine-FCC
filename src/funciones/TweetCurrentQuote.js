export default function TweetCurrentQuote(quote) {
    let tweetQuote = quote.text + '\n' + '-'+quote.author;
    const encodedQuote = encodeURIComponent(tweetQuote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}`
    return tweetUrl;
}