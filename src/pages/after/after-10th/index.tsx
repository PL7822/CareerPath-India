import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import DiplomaPage from "./diploma";
import ITIPage from "./iti";
import StreamPage from "./stream";
import SkillCoursesPage from "./skills";
import GovernmentJobs10thPage from "./government-jobs";

export default function After10thRoutes() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="diploma" element={<DiplomaPage />} />
      <Route path="iti" element={<ITIPage />} />
      <Route path="stream" element={<StreamPage />} />
      <Route path="skills" element={<SkillCoursesPage />} />
      <Route path="government-jobs" element={<GovernmentJobs10thPage />} />
    </Routes>
  );
}
