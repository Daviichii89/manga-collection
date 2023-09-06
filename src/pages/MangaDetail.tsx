import React from 'react';
import { useLocation } from 'react-router-dom';
import {MangaCover} from '../components/MangaCover';
import MangaInfo from '../components/MangaInfo';
import CollectionButton from '../components/CollectionButton';
import { Manga } from '../api/getManga';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const MangaDetail = () => {
  const mangas: Record<string, Manga> | undefined = useSelector(
    (store: RootState) => store.mangas.mangas || {}
  );
  const location = useLocation();
  const manga = Object.values(mangas).find(
    (manga: Manga) =>
      manga.title === location.state.title &&
      manga.mal_id === location.state.mal_id
  );
  
  return (
    <>
      {manga && (
        <section className="sm:w-4/5 md:w-3/4 border flex flex-col p-2 bg-white min-h-[70vh] md:min-h-[80vh]">
          <header>
            <span className="text-2xl font-bold">{manga.title}</span>
          </header>
          <main className="flex flex-col justify-center items-center md:flex-row mt-4">
            <MangaCover images={manga.images.webp.image_url} title={manga.title} />
            <MangaInfo
              publishing={manga.publishing}
              fromYear={manga.published.prop.from.year}
              toYear={manga.published.prop.to.year}
              synopsis={manga.synopsis}
            />
          </main>
          <footer>
            <CollectionButton manga={manga} />
          </footer>
        </section>
      )}
    </>
  );
};

export default React.memo(MangaDetail);
