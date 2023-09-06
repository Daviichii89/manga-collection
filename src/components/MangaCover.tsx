import React from 'react'

interface MangaImageProps {
    images: string
    title: string;
  }
export const MangaCover: React.FC<MangaImageProps> = ({images, title}) => {
  return (
    <picture className='w-[225px]'>
        <img
          src={images}
          alt={title}
          className="w-64"
        />
    </picture>
  )
}