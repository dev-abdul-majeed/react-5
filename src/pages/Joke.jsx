import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Joke = () => {
  const [joke, setJoke] = useState({})
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)

  useEffect(
    ()=>{
      setLoading(true)

      axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((resp)=>{
        setJoke(resp.data)
        setLoading(false)

      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
    },[reload]
  )

  if(loading) {
    return(
      <div className='joke-box'>
        <h1>Loading...</h1>
      </div>
  )  
  }

  return (
    <div className='joke-box'>
      <div className='mid-container'>
        <h1>Joke</h1>
        <h4>{joke.setup}</h4>
        <h4>{joke.punchline}</h4>
        <button
          onClick={()=>{
            setReload(!reload)
          }}
        >Refresh</button>
      </div>
    </div>
  )
}

export default Joke