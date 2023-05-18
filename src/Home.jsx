import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum....', author: 'mario', id:1},
        {title: "Welcome party!", body: 'lorem ipsum....', author: 'roshi', id:2},
        {title: "Web dev top tips", body: 'lorem ipsum....', author: 'luigi', id:3},
        {title: "Writing your first react app", body: 'lorem ipsum....', author: 'mario', id:4}
    ])

  return (
    <div className="home">
        <BlogList blogs={blogs} title='All blogs!'/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"/>
    </div>
  )
}

export default Home