import { useState, useRef } from "react";
import TheBox from "./components/TheBox";
import TheModal from "./components/TheModal";

export default function TheTicTacToe() {
  let [cells, setCells] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  let [theWinner, setWinner] = useState(undefined);
  let currentPlayer = useRef("x");
  let [showWinnerModal, setShowWinnerModal] = useState(false);
  let winningMove = useRef(null);

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function setSelectedCell(i) {
    cells[i].isSelected = true;
    cells[i].type = currentPlayer.current;
    cells[i].index = i;
    currentPlayer.current === "x"
      ? (currentPlayer.current = "o")
      : (currentPlayer.current = "x");
    setCells([...cells]);
    checkForWinner();
  }

  function checkForWinner() {
    let results = {};
    results.xCells = cells.filter((c) => c.isSelected && c.type === "x");
    results.xCells = results.xCells.map((x) => x.index);

    results.oCells = cells.filter((c) => c.isSelected && c.type === "o");
    results.oCells = results.oCells.map((o) => o.index);

    if (results.xCells.length >= 3) {
      for (let w of winningConditions) {
        for (let tag of ["xCells", "oCells"]) {
          let getMatches = results[tag].reduce((a, c) => a + w.includes(c), 0);
          if (getMatches === 3) {
            winningMove.current = winningConditions.indexOf(w);
            setWinner(tag === "xCells" ? "x" : "o");

            setTimeout(() => {
              setShowWinnerModal(true);
            }, 1200);
          }
        }
      }
    }
    if (results.xCells.length === 5) {
      setWinner("Draw");
      setShowWinnerModal(true);
    }
  }
  function resetTheGame() {
    currentPlayer.current = "x";
    winningMove.current = null;
    setWinner(undefined);
    setShowWinnerModal(false);
    setCells([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
  }
  const winnerClass = theWinner ? `board--winner_${theWinner}` : "";
  const winningMoveClass =
    winningMove.current !== null
      ? `board--winner-move_${winningMove.current}`
      : "";
  const boardClass = `board ${winnerClass} ${winningMoveClass}`;
  return (
    <>
      <main className="the-tic-tac-toe">
        <section className={boardClass}>
          {cells.map((cell, i) => (
            <TheBox
              key={`${cell}-${i}`}
              type={cell.type ? cell.type : currentPlayer.current}
              isSelected={cell.isSelected}
              disabled={theWinner}
              onClick={() => setSelectedCell(i)}
            />
          ))}
        </section>
      </main>
      <TheModal
        isOpen={showWinnerModal && theWinner}
        onClose={() => resetTheGame()}
      >
        {theWinner}
      </TheModal>
    </>
  );
}
