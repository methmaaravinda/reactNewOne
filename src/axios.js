import React from 'react';
import Axios from "axios"

export default function Axioss() {
    const axiosw = () => {Axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>{console.log(res.data.setup[2])
})
   
}
  return (
        
        <div>
          hello apis
          <button onClick={axiosw}>this 
          </button>
        </div>
      )
    
    
 
    
}
