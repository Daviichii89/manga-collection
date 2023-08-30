import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";

function App() {
  return (
    <main className="min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold underline mb-6">Manga</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
