/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";

interface MangaListItemProps {
  manga: {
    mal_id: number;
    title: string;
    images: {
      webp: {
        image_url: string;
      };
    };
  };
}

const MangaListItem: React.FC<MangaListItemProps> = ({ manga }) => {
  const { mal_id, title, images } = manga;

  return (
    <picture className="overflow-hidden">
      <Link to={`/mangas/${title}`} state={{ mal_id, title }} className="w-48">
        <img
          src={images.webp.image_url}
          alt={title}
          className="w-full border border-black hover:opacity-50 hover:scale-[1.3] transition-all duration-500 ease-in-out"
        />
      </Link>
    </picture>
  );
};

export default MangaListItem;
