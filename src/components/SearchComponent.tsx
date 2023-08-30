import { ChangeEvent, useState } from 'react'
import { getMangaSuccessAction } from '../redux/mangaReducer'
import { useDispatch } from 'react-redux'

type FormData = string

const SearchComponent = () => {
    const dispatch = useDispatch()
  const [keyword, setKeyword] = useState<FormData>()

  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault()
    dispatch(getMangaSuccessAction(keyword))
    setKeyword('')
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value)
  }
  return (
    <section>
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
    </section>
  )
}

export default SearchComponent