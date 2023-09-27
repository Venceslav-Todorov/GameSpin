import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NoPage from "./views/NoPage";
import Wheel from "./views/Wheel";
import TicTacToe from "./views/TictacToe";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="wheel" element={<Wheel />} />
        <Route path="tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
