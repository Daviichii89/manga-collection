import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Manga } from '../api/getManga';
import {
  AddMangaToCollectionAction,
  DeleteMangaFromCollectionAction,
} from '../redux/collectionReducer';
import { RootState } from '../redux/store';

interface CollectionButtonProps {
    manga: Manga;
}

const CollectionButton: React.FC<CollectionButtonProps> = ({ manga }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mangasCollection = useSelector(
        (store: RootState) => store.mangasCollection.mangas
    );
    const haveManga = Object.values(mangasCollection).find(
        (mangaCollection: Manga) => mangaCollection.mal_id === manga?.mal_id
    );
    const collectionAction = () => {
        if(haveManga) {
            dispatch(DeleteMangaFromCollectionAction(manga))
        } else {
            dispatch(AddMangaToCollectionAction(manga))
        }
        navigate('/collection');
    }
  return (
    <div className="mt-4">
        <button
            className={`border rounded-full w-56 p-2
             ${ haveManga
                ? 'bg-red-500 text-white md:hover:bg-red-400'
                : 'bg-green-500 text-white hover:bg-green-400'
            }`}
            onClick={collectionAction}
        >
            { haveManga ? 'Remove from my collection' : 'Add to my collection'}
        </button>
    </div>
  )
}

export default CollectionButton