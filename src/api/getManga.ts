const getManga = async (manga: string) => {
    const url = `https://api.jikan.moe/v4/manga?q=${manga}`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getManga;