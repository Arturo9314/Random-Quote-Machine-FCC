import React from "react";
import {ReactComponent as IconoTwitter} from '../imagenes/twitter.svg'
import {ReactComponent as IconoTumblr} from '../imagenes/tumblr.svg'

const Boton = ({type, bgcolor, btnHandleClick})=>{
    let icon;
    
    if(type==='twitter'){
        icon = <IconoTwitter/>
    }else if(type==='tumblr'){
        icon = <IconoTumblr/>
    }else{
        return null;
    }
    
    return(
        <button style={{background: bgcolor}} onClick={btnHandleClick} className="btn-quote">
            {icon}
        </button>
    );
}

export default Boton;