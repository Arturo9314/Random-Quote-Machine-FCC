import './App.css'
import { useQuote } from './hooks/useQuote';
import {ReactComponent as IconoComillasIzq} from './imagenes/quote-left-solid.svg'
import {ReactComponent as IconoComillasDer} from './imagenes/quote-right-solid.svg'
import {ReactComponent as IconoGuion} from './imagenes/minus-solid.svg'
import {ReactComponent as IconoPlus} from './imagenes/plus-solid.svg'
import Boton from './elementos/Boton';
import RandomColor from './funciones/RandomColor'
import { useEffect, useState } from 'react';
import TweetCurrentQuote from './funciones/TweetCurrentQuote';

function App() {
  const[color,setColor] = useState(RandomColor())
  const {quote, getRandomQuoteAndUpdateState} = useQuote()
  const tweetUrl = TweetCurrentQuote(quote);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, []);

  const handleClick = async ()=>{
    let newColor =RandomColor();
    getRandomQuoteAndUpdateState()
    document.body.style.backgroundColor = newColor;
    setColor(newColor)
  }

  const handleTweetClick = ()=>{
    window.open(tweetUrl, '_blank');
  }

  return (
    <div className="App">
      <main className='wrapper'>
      { quote &&
        <div id='quote-box'>             
            <div className='quote-text'>
              <p id='text'><IconoComillasIzq/>{quote.text}<IconoComillasDer/></p>
            </div>
            <div className='quote-author'>
              <p id='author'><IconoGuion/>{quote.author}</p>
            </div>
            <div className='buttons'>
              <a href={tweetUrl} rel='noopener noreferrer' target='_blank' id='tweet-quote'>
                <Boton bgcolor={color} type='twitter' btnHandleClick={()=>handleTweetClick}/>
              </a>
              <Boton bgcolor={color} type='tumblr' />
              <button id='new-quote' style={{background: color}} className='btn-quote' onClick={handleClick}>New quote <IconoPlus/></button>
            </div>
        </div>  
      }
      </main>
      <div className='footer'>
        <p>by Arturo Torres</p>
      </div>
    </div>
  )
}

export default App;
