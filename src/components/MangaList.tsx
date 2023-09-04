import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { Manga } from "../api/getManga";

const MangaList = (): JSX.Element => {
  const mangas = useSelector((store: RootState) => store.mangas.mangas);
  return (
    <section
      className={
        mangas
          ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 bg-white gap-5 p-4"
          : "w-full"
      }
    >
      {mangas && mangas ? (
        Object.values(mangas).map((manga: Manga) => {
          const { mal_id, title, images } = manga;
          return (
            <div key={mal_id}>
              <Link
                to={`/mangas/${title}`}
                state={{ mal_id, title }}
                className="w-48"
              >
                <img
                  src={images.webp.image_url}
                  alt={title}
                  className="w-full border border-black"
                />
              </Link>
            </div>
          );
        })
      ) : (
        <section className="bg-white w-full min-h-[400px] flex justify-center items-center p-7">
          <img src="/shonen.webp" alt="manga-shonen" className="w-[400px]" />
        </section>
      )}
    </section>
  );
};

export default MangaList;
