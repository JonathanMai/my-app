import React, { useEffect, useState } from 'react'

const Main = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
        .then(response => response.json())
        .then(val => setData(val.entries))
        .catch(err => console.log('err',err))
    }, [])
    
  return (
  )
}

export default Main