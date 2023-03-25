import { useState, useEffect } from 'react';
import { getRandomQuote } from '../services/quotes';

export const useQuote = ()=>{
    const [quote, setQuote] = useState({
      text: '',
      author: ''
    })
    const getRandomQuoteAndUpdateState=()=>{
      getRandomQuote().then(newQ=>setQuote(newQ))
    }
    useEffect(getRandomQuoteAndUpdateState, [])
    return {quote, getRandomQuoteAndUpdateState}
  }