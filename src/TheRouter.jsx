import { Routes, Route } from "react-router-dom";
import TheHome from "./views/TheHome";
import NoPage from "./views/NoPage";
import TheWheel from "./views/TheWheel";
import TheTicTacToe from "./views/TheTictacToe";

export default function TheRouter() {
  return (
    <>
    
      <Routes>
        <Route path="/" index element={<TheHome />} />
        <Route path="wheel" element={<TheWheel />} />
        <Route path="tic-tac-toe" element={<TheTicTacToe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
