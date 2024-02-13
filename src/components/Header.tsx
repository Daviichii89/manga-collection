import SearchComponent from './SearchComponent';

const Header = () => {
  return (
    <header className="text-center mb-6">
      <h1 className="text-3xl font-bold underline mb-6 text-white">
        Manga Collection
      </h1>
      <SearchComponent />
    </header>
  );
};

export default Header;