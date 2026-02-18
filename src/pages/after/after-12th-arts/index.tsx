import { Routes, Route } from "react-router-dom";
import ArtsPage from "./arts";

export default function After12thArtsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ArtsPage />} />
    </Routes>
  );
}
