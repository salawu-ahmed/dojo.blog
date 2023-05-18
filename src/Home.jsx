import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
import { useEffect } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBlogs(data)
            })
            // the above code will not produce an infinite loop because of the empty dependency array
    }, [])

  return (
    <div className="home">
        {blogs && <BlogList blogs={blogs} title='All blogs!'/>}
        {/* 
        conditional templating in react, the thing on the right is only output if the thing on the left is true 
        */}
    </div>
  )
}

export default Home