import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Manga } from '../api/getManga';
import MangaListItem from './MangaListItem';

const MangaList = (): JSX.Element => {
  const mangas = useSelector((store: RootState) => store.mangas.mangas);
  return (
    <section
      className={
        mangas && Object.values(mangas).length !== 0
          ? 'w-full sm:w-4/5 md:w-3/4 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 bg-white gap-5 p-4'
          : 'w-full sm:w-4/5 md:w-3/4 flex items-center justify-center'
      }
    >
      {mangas && Object.values(mangas).length !== 0 ? (
        Object.values(mangas).map((manga: Manga) => (
          <MangaListItem key={manga.mal_id} manga={manga} />
        ))
      ) : (
        <section className="bg-white w-full min-h-[70vh] md:min-h-[80vh] flex justify-center items-center p-7">
          <img
            src="/shonen.webp"
            alt="manga-shonen"
            className="w-[600px]"
          />
        </section>
      )}
    </section>
  );
};

export default MangaList;
