import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  return (
    <main className="min-h-screen text-center p-4">
      <h1 className="text-3xl font-bold underline mb-6">Manga</h1>
      <BrowserRouter>
        <nav className="flex justify-evenly">
          <Link
            to="/"
            className="border w-full bg-slate-300 hover:bg-slate-100"
          >
            Inicio
          </Link>
          <Link
            to="/collection"
            className="border w-full bg-slate-300 hover:bg-slate-100"
          >
            Mi collección
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
