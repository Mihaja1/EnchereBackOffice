import './App.css';
import Statistique from './pages/Statistique';
import ListeNonValide from './pages/ListeNonValide';
import ListeCategorie from './pages/ListeCategorie';
import ListeCommission from './pages/ListeCommission';
import AjoutCommission from './pages/AjoutCommission';
import AjoutCategorie from './pages/AjoutCategorie';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/statistique" element={<Statistique/>} />
          <Route path="/rechargement" element={<ListeNonValide/>} />
          <Route path="/commission" element={<AjoutCommission />} />
          <Route path="/categorie" element={<AjoutCategorie />} />
          <Route path="/listeCategorie" element={<ListeCategorie />} />
          <Route path="/listeCommission" element={<ListeCommission />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;