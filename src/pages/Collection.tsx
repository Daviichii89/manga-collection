import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Manga } from '../api/getManga';
import { Link } from 'react-router-dom';

const Collection = (): JSX.Element => {
  const mangas = useSelector(
    (store: RootState) => store.mangasCollection.mangas
  );
  return (
    <section
      className={
        mangas && Object.keys(mangas).length !== 0
          ? 'md:w-3/4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-5 bg-white p-4 min-h-[70vh] md:min-h-[80vh]'
          : 'w-full md:w-3/4'
      }
    >
      {mangas && Object.keys(mangas).length !== 0 ? (
        Object.values(mangas).map((manga: Manga) => {
          const { mal_id, title, images } = manga;
          return (
            <picture key={mal_id} className='overflow-hidden'>
              <Link
                to={`/mangas/${title}`}
                state={{ mal_id, title }}
                className="w-48"
              >
                <img
                  src={images.webp.image_url}
                  alt={title}
                  className="w-full border border-black hover:opacity-50 hover:scale-[1.3] transition-all duration-500 ease-in-out"
                />
              </Link>
            </picture>
          );
        })
      ) : (
        <section className="bg-white w-full min-h-[70vh] md:min-h-[80vh] text-center flex justify-center items-center p-7">
          Empty.
        </section>
      )}
    </section>
  );
};

export default Collection;
