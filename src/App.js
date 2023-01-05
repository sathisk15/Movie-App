import BottomNav from './components/BottomNav';
import NavBar from './components/NavBar';
import MovieContent from './components/MovieContent';
import Pages from './components/Pages';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieContent />
      <Pages />
      <BottomNav />
    </div>
  );
}

export default App;
