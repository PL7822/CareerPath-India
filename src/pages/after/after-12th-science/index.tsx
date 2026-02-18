import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Engineering from "./Engineering";
import Medical from "./Medical";
import Bsc from "./Bsc";
import Government from "./Government";

export default function After12thScienceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="Engineering" element={<Engineering />} />
      <Route path="Medical" element={<Medical />} />
      <Route path="Bsc" element={<Bsc />} />
      <Route path="government" element={<Government />} />
    </Routes>
  );
}
