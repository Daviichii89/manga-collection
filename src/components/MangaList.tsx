import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { Manga } from '../api/getManga';

const MangaList = (): JSX.Element => {
  const mangas = useSelector((store: RootState) => store.mangas.mangas);
  return (
    <section
      className={
        mangas && Object.values(mangas).length !== 0
          ? 'w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 bg-white gap-5 p-4'
          : 'w-full flex items-center justify-center'
      }
    >
      {mangas && Object.values(mangas).length !== 0 ? (
        Object.values(mangas).map((manga: Manga) => {
          const { mal_id, title, images } = manga;
          return (
            <div key={mal_id} className='overflow-hidden'>
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
            </div>
          );
        })
      ) : (
        <section className="bg-white md:w-3/4 min-h-[70vh] md:min-h-[80vh] flex justify-center items-center p-7">
          <img src="/shonen.webp" alt="manga-shonen" className="w-[600px]" />
        </section>
      )}
    </section>
  );
};

export default MangaList;
