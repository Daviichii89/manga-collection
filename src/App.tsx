import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import MangaDetail from "./pages/MangaDetail";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <main className="min-h-screen text-center p-4 bg-blue-600">
      <h1 className="text-3xl font-bold underline mb-6 text-white">
        Mangas Collection
      </h1>
      <SearchComponent />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangas/:name" element={<MangaDetail />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
}

export default App;
