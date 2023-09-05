import getManga from '../api/getManga';
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

describe('getManga', () => {
  it('debe devolver mangas correctamente', async () => {
    const mangaTitle = 'One Piece';
    const result = await getManga(mangaTitle);

    expect(result).toBeDefined();
    expect(result[0].title).toBe(mangaTitle);
  });
});