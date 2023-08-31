import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'
import { Manga } from '../api/getManga'

export interface MangaList {
  mangas: Record<number, Manga>
}

const MangaList = (): JSX.Element => {
  const mangas = useSelector((store: RootState) => store.mangas.mangas)
  return (
    <section className={ mangas ? 'grid grid-cols-2 gap-5 mt-2' : 'mt-28'}>
      {
        mangas ? 
          Object.values(mangas).map((manga: Manga) => {
            const { mal_id, title, images } = manga
            return (
            <div key={mal_id}>
              <Link
                to={`/mangas/${title}`}
                state={{mal_id, title}}
                className='w-48'
              >
                <img src={images.webp.image_url} alt={title} className='w-full' />
              </Link>
            </div> 
          )})
        :
          <picture>
            <img
              src="/shonen.webp" 
              alt="manga-shonen"
              className='w80'
            />
          </picture>
      }
    </section>
  )
}

export default MangaList