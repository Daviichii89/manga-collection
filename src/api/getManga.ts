export interface Manga {
  mal_id: number
  title: string
  images: {
    webp: {
      image_url: string
  }}
  chapters: number
  volumes: number
  status: string
  publishing: boolean
  published: {
    prop: {
      from: {
        year: number
      }
      to: {
        year: number
      }
    }
  }
  synopsis: string
  authors: [{
    name: string
  }]
  demographics: [{
    name?: string
  }]
}

const getManga = async (manga_title: string) => {
    const url = `https://api.jikan.moe/v4/manga?q=${manga_title}`;
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('Request error')
      }
      const result = await response.json();

      const mangas: Manga[] =  result.data
      const mangasMap: Record<number, Manga> = {}
      mangas.map(({
        mal_id,
        title,
        images,
        chapters,
        volumes,
        status,
        publishing,
        published,
        synopsis,
        authors,
        demographics
      }: Manga) => {
        return mangasMap[mal_id] = {
          mal_id: mal_id,
          title: title,
          images: {
            webp: {
              image_url:images.webp.image_url
            }
          },
          chapters: chapters,
          volumes: volumes,
          status: status,
          publishing: publishing,
          published: {
            prop: {
              from: {
                year: published.prop.from.year
              },
              to: {
                year: published.prop.to.year
              }
          }},
          synopsis: synopsis,
          authors: [{
            name: authors[0]?.name
          }],
          demographics: [{
            name: demographics[0]?.name
          }]
        }
      })
      return mangasMap
    } catch (error: unknown) {
      console.error(error);
      throw error
    }
  };
  
  export default getManga;