import MangaList from './components/MangaList'
import SearchComponent from './components/SearchComponent'

function App() {
  return (
    <main className='min-h-screen text-center p-4'>
      <h1 className='text-3xl font-bold underline mb-6'>
        Manga
      </h1>
      <SearchComponent />
      <MangaList />
    </main>
  )
}

export default App
