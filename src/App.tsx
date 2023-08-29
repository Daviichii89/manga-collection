import { useEffect } from 'react'
import getManga from './api/getManga'

function App() {
  useEffect(() => {
    getManga('naruto')
  }, [])
  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Anime
      </h1>
    </>
  )
}

export default App
