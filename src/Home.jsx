import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
import { useEffect } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then((res) => {
                if (!res.ok) throw Error('could not fetch the data from that resource') 
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            // the above code will not produce an infinite loop because of the empty dependency array
            .catch((err) => {
                setError(err.message)
                setIsPending(false)
            })
            // the catch on the fetch api only catches connection error 
        }, 1000);
    }, [])

  return (
    <div className="home">
        {isPending && <div>loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All blogs!'/>}
        {error && <div>{error}...</div>}

        {/* 
        conditional templating in react, the thing on the right is only output if the thing on the left is true 
        */}
    </div>
  )
}

export default Home