import { ChangeEvent, FormEvent, useState } from 'react';
import { getMangaSuccessAction } from '../redux/mangaReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

type FormData = string;

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<FormData>('');
  const navigate = useNavigate()
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(getMangaSuccessAction(keyword));
    setKeyword('');
    navigate('/')
  };
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setKeyword(evt.target.value);
  };
  return (
    <section className="mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for your mangas..."
          value={keyword}
          onChange={handleChange}
          className="p-2 rounded-l-lg border focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 rounded-r-lg text-white border p-2"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchComponent;
