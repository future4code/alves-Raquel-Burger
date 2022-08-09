import {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestdata = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [url, refresh])
  return (data)
}

export default useRequestdata