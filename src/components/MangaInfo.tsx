import React from 'react'

interface MangaInfoProps {
    publishing: boolean
    fromYear: number
    toYear: number | null
    synopsis: string
    authors: string
    type: string | undefined
    volumes: number
    chapters: number
}

const MangaInfo: React.FC<MangaInfoProps> = ({ 
    publishing,
    fromYear,
    toYear ,
    synopsis,
    authors,
    type,
    volumes,
    chapters
}) => {
  return (
    <div className="ml-4 text-left w-full">
        <p><span className='font-bold'>Type: </span>{type}</p>
        <p><span className='font-bold'>Author/s: </span>{authors}</p>
        <p><span className='font-bold'>Volumes: </span>{volumes}</p>
        <p><span className='font-bold'>Chapters: </span>{chapters}</p>
        <p><span className='font-bold'>In publication:</span> {publishing !== false ? 'Yes' : 'No'}</p>
        <p><span className='font-bold'>Published:</span> {fromYear} to {
            toYear !== null
            ? toYear
            : '?'
          }
        </p>
        <p className='font-bold'>Synopsis:</p>
        <p className='p-2'>{synopsis ? synopsis.replace(/—/g, ' ') : 'Description is not available'}</p>
    </div>
  )
}

export default MangaInfo