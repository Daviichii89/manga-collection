import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Manga } from "../api/getManga";
import { Link } from "react-router-dom";

const Collection = (): JSX.Element => {
  const mangas = useSelector(
    (store: RootState) => store.mangasCollection.mangas
  );
  return (
    <section
      className={
        mangas
          ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-5 bg-white p-4"
          : "w-full"
      }
    >
      {mangas ? (
        Object.values(mangas).map((manga: Manga) => {
          const { mal_id, title, images } = manga;
          return (
            <picture key={mal_id}>
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
            </picture>
          );
        })
      ) : (
        <section className="bg-white w-full min-h-[455px] text-center flex justify-center items-center p-7">
          Empty.
        </section>
      )}
    </section>
  );
};

export default Collection;
