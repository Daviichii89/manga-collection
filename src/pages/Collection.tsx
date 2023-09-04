import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Manga } from '../api/getManga';
import { Link } from 'react-router-dom';

const Collection = (): JSX.Element => {
  const mangas = useSelector((store: RootState) => store.mangasCollection.mangas)
  return (
    <section className={ mangas ? 'grid grid-cols-2 gap-5 mt-2' : 'mt-28'}>
      {
        mangas ? 
          Object.values(mangas).map((manga: Manga) => {
            const { mal_id, title, images } = manga
            return (
              <picture key={mal_id}>
                <Link 
                  to={`/mangas/${title}`}
                  state={{mal_id, title}}
                  className='w-48'
                >
                  <img src={images.webp.image_url} alt={title} className='w-full' />
                </Link>
              </picture>
            )
          })
        :
          'Vacio'
      }
    </section>
  );
};

export default Collection;
