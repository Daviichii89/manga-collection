import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from '../redux/store'

const MangaDetail = () => {
    const mangas = useSelector((store: RootState) => store.mangas.mangas?.data)
    const location = useLocation()
    const manga = mangas.find((manga) => manga.title === location.state.title && manga.mal_id === location.state.mal_id)
  return (
    <>
        {manga && 
            <section
                className='border flex flex-col p-2 mt-4'
            >
                <span className='text-2xl font-bold'>
                    {manga.title}
                </span>
                <div className='flex flex-row mt-4'>
                    <picture>
                        <img src={manga.images.jpg.image_url} alt={manga.title} className='w-48' />
                    </picture>
                    <div className='ml-4'>
                        <p>
                            En publicación: {manga.publishing !== false ? 'Sí' : 'No'}
                        </p>
                        <p>
                            Año de publicación: {manga.published.prop.from.year}
                        </p>
                        <p>
                            Año de finalización: {manga.published.prop.to.year !== null ? manga.published.prop.to.year : 'No definido' }
                        </p>
                    </div>
                </div>

            </section>
        }
    </>
  )
}

export default MangaDetail