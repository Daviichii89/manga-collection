/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable quotes */
// @ts-nocheck
import { render, screen } from "@testing-library/react";
import CollectionButton from "../components/CollectionButton";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// const sampleManga = {
//   mal_id: 1,
//   title: "Sample Manga",
//   images: {
//     webp: {
//       image_url: "hola",
//     },
//   },
//   chapters: 23,
//   volumes: 2,
//   status: "asda",
//   publishing: false,
//   published: {
//     prop: {
//       from: {
//         year: 1999,
//       },
//       to: {
//         year: 1999,
//       },
//     },
//   },
//   synopsis: "hola que tal",
//   authors: [
//     {
//       name: "string",
//     },
//   ],
//   demographics: [{ name: "Shounen" }],
// };
// const mockStore = configureStore([]);
// const store = mockStore({ manga: sampleManga });
describe("<CollectionButton />", () => {
  it('Should show "Add to my collection" if the manga is in the collection', () => {
    const sampleManga = { mal_id: 1, title: "Sample Manga" };

    render(
      <Provider store={store}>
        <CollectionButton manga={sampleManga} mangasCollection={{}} />
      </Provider>
    );

    const button = screen.getByText("Add to my collection");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-green-500");
  });
  //   it('Dhould show "Remove from my collection" if the manga is not in the collection', () => {
  //     const sampleManga = {};

  //     render(
  //       <Provider store={store}>
  //         <CollectionButton manga={sampleManga} mangasCollection={sampleManga} />
  //       </Provider>
  //     );

  //     const button = screen.getByText("Remove from my collection");
  //     expect(button).toBeInTheDocument();
  //     expect(button).toHaveClass("bg-red-500");
  //   });
});
