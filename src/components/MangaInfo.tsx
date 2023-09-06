import React from 'react'

interface MangaInfoProps {
    publishing: boolean
    fromYear: number
    toYear: number | null
    synopsis: string
}

const MangaInfo: React.FC<MangaInfoProps> = ({ 
    publishing,
    fromYear,
    toYear ,
    synopsis
}) => {
  return (
    <div className="ml-4 text-left w-full">
        <p><span className='font-bold'>In publication</span>: {publishing !== false ? 'Yes' : 'No'}</p>
        <p><span className='font-bold'>Published:</span> {fromYear} to {
            toYear !== null
            ? toYear
            : '?'
          }
        </p>
        <p className='font-bold'>Synopsis:</p>
        <p>{synopsis.replace(/—/g, ' ')}</p>
    </div>
  )
}

export default MangaInfo