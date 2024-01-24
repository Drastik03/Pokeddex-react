import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pokemons from "./pages/Pokemons";
import { Navigation } from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/pokemons"/>} />
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="pokemons/:id" element={<Pokemons />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
