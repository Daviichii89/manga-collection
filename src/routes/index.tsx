import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import Error404 from '../pages/Error404';
import MangaDetail from '../pages/MangaDetail';

const AppRoutes = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangas/:name" element={<MangaDetail />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </section>
  );
};

export default AppRoutes;