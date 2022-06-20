import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CampsitesDirectroryPage from './pages/CampsitesDirectoryPage';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesDirectroryPage />
      <Footer />
    </div>
  );
}

export default App;