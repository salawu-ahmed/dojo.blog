import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`)

  return (
    <div className='blog-details'>
        {isPending && (<div> loading ...</div>)}
        {error && (<div> { error }  {console.log(error)}</div>)}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>written by: {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        )}
    </div>
  )
}

export default BlogDetails