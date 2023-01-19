import './App.css';
import Statistique from './pages/Statistique';
import ListeNonValide from './pages/ListeNonValide';
import AjoutCommission from './pages/AjoutCommission';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Statistique/>} />
          <Route path="/rechargement" element={<ListeNonValide/>} />
          <Route path="/commission" element={<AjoutCommission />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;