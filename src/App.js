import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { ContinentsPage } from "./Pages/ContinentsPage";
import { CountryPage } from "./Pages/CountryPage";
import { DetailLocation } from "./Pages/DetailLocation";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents/:continentsId" element={<ContinentsPage />} />
        <Route
          path="/country/:continentsId/:countryId"
          element={<CountryPage />}
        />
        <Route
          path="/destination/:continentsId/:countryId/:locationId"
          element={<DetailLocation />}
        />
      </Routes>
    </div>
  );
}

export default App;
// https://melodic-moonbeam-89236d.netlify.app/
