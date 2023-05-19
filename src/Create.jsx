import React from 'react'
import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('hello')
  const [body, setBody] = useState('this is the body')
  const [author, setAuthor] = useState('mario')

  return (
    <div className='create'>
      <h2>Create a new blog post</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type="text" 
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Blog body:</label>
        <textarea 
          required 
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <label>Blog author:</label>
        <select
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>add blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  )
}

export default Create