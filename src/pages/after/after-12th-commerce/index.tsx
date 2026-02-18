import { Routes, Route } from "react-router-dom";
import CommercePage from "./commerce";

export default function After12thCommerceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CommercePage />} />
    </Routes>
  );
}
