import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Manga } from '../api/getManga';
import MangaListItem from '../components/MangaListItem';

const Collection = (): JSX.Element => {
  const mangas = useSelector(
    (store: RootState) => store.mangasCollection.mangas
  );
  return (
    <section
      className={
        mangas && Object.keys(mangas).length !== 0
          ? 'sm:w-4/5 md:w-3/4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-5 md:gap-2 bg-white p-4 min-h-[70vh] md:min-h-[80vh]'
          : 'w-full sm:w-4/5 md:w-3/4'
      }
    >
      {mangas && Object.keys(mangas).length !== 0 ? (
        Object.values(mangas).map((manga: Manga) => (
          <MangaListItem key={manga.mal_id} manga={manga} />
        ))
      ) : (
        <section className="bg-white w-full min-h-[70vh] md:min-h-[80vh] text-center flex justify-center items-center p-7">
          Empty.
        </section>
      )}
    </section>
  );
};

export default Collection;
