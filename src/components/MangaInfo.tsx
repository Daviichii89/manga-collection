import React from 'react'

interface MangaInfoProps {
    publishing: boolean
    fromYear: number
    toYear: number | null
}

const MangaInfo: React.FC<MangaInfoProps> = ({ 
    publishing,
    fromYear,
    toYear 
}) => {
  return (
    <div className="ml-4">
        <p>En publicación: {publishing !== false ? 'Sí' : 'No'}</p>
        <p>Año de publicación: {fromYear}</p>
        <p>
        Año de finalización:{' '}
        {toYear !== null
            ? toYear
            : 'No definido'}
        </p>
    </div>
  )
}

export default MangaInfo