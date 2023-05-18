import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if (!res.ok) throw Error('could not fetch the data from that resource') 
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
        }, 1000);
    }, [url])
    // whenever the url changes the useEffect() hook runs 

    return {data, isPending, error}
    // we could have returned an array but using an object would allow us to destructure later without worrying about order
}

export default useFetch