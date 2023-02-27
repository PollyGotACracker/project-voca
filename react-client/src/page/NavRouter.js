import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import {
  Intro,
  Home,
  VocaMain,
  VocaNote,
  VocaDetail,
  VocaWrite,
  QuizMain,
  DiaryMain,
  Set,
} from "../comps/Index";

const NavRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/voca" element={<VocaMain />} />
      <Route path="/voca/category/:catid" element={<VocaNote />} />
      <Route path="/voca/category/:catid/search" element={<VocaNote />} />
      <Route path="/voca/subject/:catid/:subid" element={<VocaDetail />} />
      <Route path="/voca/write/:catid/:subid?" element={<VocaWrite />} />
      <Route path="/diary" element={<DiaryMain />} />
      <Route path="/quiz" element={<QuizMain />} />
      <Route path="/setting" element={<Set />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRouter;
