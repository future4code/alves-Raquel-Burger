import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UseRequestData = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect (() => {
    setIsLoading(true)
    axios.get(url)
    .then((res) => {
      setIsLoading(false)
      setData(res.data)
    })
    .catch((err) => {
      setIsLoading(false)
      setError(err)
    })
  }, [url])
  return (
    [data, isLoading, error]
  )
}

export default UseRequestData