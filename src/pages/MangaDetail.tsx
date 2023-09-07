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
  const mangasCollection: Record<string, Manga> | object = useSelector(
    (store: RootState) => store.mangasCollection.mangas
  );
  const location = useLocation();

  const manga = 
    location?.state?.title &&
    (mangas
      ? Object.values(mangas).find(
        (manga: Manga) =>
          manga.title === location.state.title &&
          manga.mal_id === location.state.mal_id
      )
      : null)
  
  const mangaCollection = 
    location?.state?.title &&
    (mangasCollection 
      ? Object.values(mangasCollection).find(
      (manga: Manga) =>
        manga.title === location.state.title &&
        manga.mal_id === location.state.mal_id
    )
    : null)
  
  return (
    <>
      {manga || mangaCollection ? (
        <section className="sm:w-4/5 md:w-3/4 border flex flex-col md:items-center md:justify-center p-2 bg-white min-h-[70vh] md:min-h-[80vh] min-w-full md:min-w-[70vw]">
          <header>
            <span className="text-2xl font-bold">{manga ? manga.title : mangaCollection.title}</span>
          </header>
          <main className="flex flex-col justify-center items-center md:flex-row 2xl:w-4/5 mt-4">
            <MangaCover images={manga ? manga.images.webp.image_url: mangaCollection.images.webp.image_url} title={manga ? manga.title : mangaCollection.title} />
            <MangaInfo
              publishing={manga ? manga.publishing : mangaCollection.publishing}
              fromYear={manga ? manga.published.prop.from.year : mangaCollection.published.prop.from.year}
              toYear={manga ? manga.published.prop.to.year : mangaCollection.published.prop.to.year}
              synopsis={manga ? manga.synopsis : mangaCollection.synopsis}
              authors={manga ? manga.authors[0].name : mangaCollection.authors[0].name}
              type={manga ? manga.demographics[0].name : mangaCollection.demographics[0].name}
              volumes={manga ? manga.volumes : mangaCollection.volumes}
              chapters={manga ? manga.chapters : mangaCollection.chapters}
            />
          </main>
          <footer>
            <CollectionButton manga={manga ? manga : mangaCollection} />
          </footer>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default React.memo(MangaDetail);
