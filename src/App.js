import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { ContinentsPage } from "./Pages/ContinentsPage";
import { CountryPage } from "./Pages/CountryPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents/:continentsId" element={<ContinentsPage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
// https://melodic-moonbeam-89236d.netlify.app/
