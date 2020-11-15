import React, { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {

    const [results, setResults] = useState([])
    const [errMsg, setErrMsg] = useState('')
  
    const searchApi = async (searchTerm) => {
      try {
        const res = await yelp.get('/search',{
          params: { limit: 50, term: searchTerm, location: 'san jose' }
        })
        setResults(res.data.businesses)
        setQuery('')
      } catch (error) {
        console.log(error.response)
        setErrMsg('Something went wrong bruh!!')
      }
    }
  useEffect(() => {
      searchApi('pasta')
  },[])

  return [searchApi,errMsg,results]
}