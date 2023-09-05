import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <main className="min-h-screen text-center p-4 bg-blue-600 flex items-center justify-center flex-col">
      <Header />
      <MainContent />
    </main>
  );
}

export default App;
