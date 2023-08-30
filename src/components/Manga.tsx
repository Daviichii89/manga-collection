import { useSelector } from 'react-redux'

const Manga = () => {
    const mangas = useSelector(store => store.mangas.mangas?.data)
  return (
    <div>
        {
            mangas && mangas.map(manga => (
                <section
                    key={manga.id}
                    className='border flex flex-col p-2'
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
            ))
        }
    </div>
  )
}

export default Manga