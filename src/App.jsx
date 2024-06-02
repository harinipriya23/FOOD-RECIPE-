import NavBar from "./components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./tabs/home";
import Favourites from "./tabs/favourites";
import Details from "./tabs/details";
function App() {
  return (
    <div className="capitalize">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
