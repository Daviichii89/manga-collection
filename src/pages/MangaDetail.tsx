import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { Manga } from "../api/getManga";
import {
  AddMangaToCollectionAction,
  DeleteMangaFromCollectionAction,
} from "../redux/collectionReducer";

const MangaDetail = () => {
  const dispatch = useDispatch();
  const mangas: Record<number, Manga> | undefined = useSelector(
    (store: RootState) => store.mangas.mangas || {}
  );
  const location = useLocation();
  const manga = Object.values(mangas).find(
    (manga: Manga) =>
      manga.title === location.state.title &&
      manga.mal_id === location.state.mal_id
  );
  const mangasCollection: Record<number, Manga> | undefined = useSelector(
    (store: RootState) => store.mangasCollection.mangas
  );
  const haveManga = Object.values(mangasCollection).find(
    (mangaCollection: Manga) => {
      return mangaCollection.mal_id === manga?.mal_id;
    }
  );
  return (
    <>
      {manga && (
        <section className="border flex flex-col p-2 bg-white">
          <span className="text-2xl font-bold">{manga.title}</span>
          <div className="flex flex-row justify-center items-center mt-4">
            <picture>
              <img
                src={manga.images.webp.image_url}
                alt={manga.title}
                className="w-48"
              />
            </picture>
            <div className="ml-4">
              <p>En publicación: {manga.publishing !== false ? "Sí" : "No"}</p>
              <p>Año de publicación: {manga.published.prop.from.year}</p>
              <p>
                Año de finalización:{" "}
                {manga.published.prop.to.year !== null
                  ? manga.published.prop.to.year
                  : "No definido"}
              </p>
            </div>
          </div>
          <div className="mt-4">
            {haveManga ? (
              <button
                className="border rounded-full w-56 p-2 bg-red-500 text-white md:hover:bg-red-400"
                onClick={() => dispatch(DeleteMangaFromCollectionAction(manga))}
              >
                Remove from my collection
              </button>
            ) : (
              <button
                className="border rounded-full w-56 p-2 bg-green-500 text-white md:hover:bg-green-400"
                onClick={() => dispatch(AddMangaToCollectionAction(manga))}
              >
                Add to my collection
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default MangaDetail;
