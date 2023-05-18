import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <h1>the dojo blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar