/* eslint-disable quotes */
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MangaListItem from "../components/MangaListItem";
import { BrowserRouter } from "react-router-dom";

describe("", () => {
  it("Should show cover manga", () => {
    const mangaMock = {
      mal_id: 1,
      title: "Naruto",
      images: {
        webp: {
          image_url: "naruto.webp",
        },
      },
    };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MangaListItem manga={mangaMock} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByAltText(/naruto/i)).toBeInTheDocument();
  });
});
