import { ChangeEvent, useState } from 'react'
import { getMangaSuccessAction } from './redux/mangaReducer'
import { useDispatch } from 'react-redux'

type FormData = string

function App() {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState<FormData>()

  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    console.log(keyword)
    dispatch(getMangaSuccessAction(keyword))
    setKeyword('')
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value)
  }

  return (
    <main className='bg-black min-h-screen text-center'>
      <h1 className='text-3xl font-bold underline text-white mb-2'>
        Anime
      </h1>
        <input
          type='text'
          name='search'
          placeholder='Search...'
          value={keyword}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='bg-blue-500 rounded text-white border p-2'
          onClick={handleSubmit}
        >
          Buscar
        </button>
    </main>
  )
}

export default App
