import { createContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import './Grid.css'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const Grid = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [query, setSearchQuery] = useState('');

  const movieImageUrlBase = 'https://image.tmdb.org/t/p/w1280'
  const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0cef49dce8d89376c3e98a86a6b88018&page=1&'
  const searchUrl = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0cef49dce8d89376c3e98a86a6b88018&page=1&query='

  useEffect(()=>{
    setLoading(true)

    axios.get(query === '' ? discoverUrl : `${searchUrl}${query}`)
    .then(resp => {
      setData(resp.data.results)
      console.log(resp.data.results)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })

  }, [query])

  if(loading) return( <>
    <SearchBar />
    <h3>Loading ... </h3>
  </>)

  return (
    <div className='cards-grid'>
      
        <SearchBar handleSubmit={setSearchQuery}/>
        {data.map(item => (
          <Card item={item} movieImageUrlBase={movieImageUrlBase}/>
        ))}

    </div>
  )
}

export default Grid