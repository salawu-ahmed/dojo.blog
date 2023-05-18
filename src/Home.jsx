import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
import { useEffect } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum....', author: 'mario', id:1},
        {title: "Welcome party!", body: 'lorem ipsum....', author: 'roshi', id:2},
        {title: "Web dev top tips", body: 'lorem ipsum....', author: 'luigi', id:3},
        {title: "Writing your first react app", body: 'lorem ipsum....', author: 'mario', id:4}
    ])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log('useEffect run');
        // state can be accessed in useEffect
        console.log(blogs);
    })

  return (
    <div className="home">
        <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
    </div>
  )
}

export default Home