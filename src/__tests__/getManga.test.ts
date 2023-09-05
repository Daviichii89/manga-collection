import getManga from '../api/getManga';

describe('getManga', () => {
  it('debe devolver mangas correctamente', async () => {
    const mangaTitle = 'One Piece';
    const result = await getManga(mangaTitle);

    expect(result).toBeDefined();
    expect(result[0].title).toBe(mangaTitle);
  });
});