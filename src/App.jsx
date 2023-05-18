import './App.css'

function App() {
  const title = 'welcome to the new blog'
  const likes = 50
  const link = "http://www.google.com"

  return (
    <>
      <h1>{title}</h1>
      <p>liked {likes} times</p>
      <p>{10}</p>
      <p>{'hello world'}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Google site</a>
    </>
  )
}

export default App