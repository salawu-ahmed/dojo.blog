import React from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    // the data: blogs named the destructured variable blogs
    
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