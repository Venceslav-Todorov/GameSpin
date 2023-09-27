import { Link } from "react-router-dom";

export default function TheHome() {
  return (
    <main className="the-home">
      <div className="the-home_content">
        <h1>GameSpin</h1>
        <section className="the-home_games">
          <Link to="/wheel">
            <img src="../src/assets/img/card-wheel.svg" alt="" />
            <h1>Wheel</h1>
            <p>Game of chance where spinning wheel determines the winner</p>
          </Link>
          <Link to="/tic-tac-toe">
            <img src="../src/assets/img/card-tic-tac-toe.svg" alt="" />
            <h1>Tic Tac Toe</h1>
            <p>Classic board game for two players</p>
          </Link>
        </section>
      </div>

      <img className="cloud" src="../src/assets/img/cloud-1.png" alt="" />
      <img className="cloud" src="../src/assets/img/cloud-2.png" alt="" />
      <img className="cloud" src="../src/assets/img/cloud-3.png" alt="" />
      <img className="cloud" src="../src/assets/img/cloud-4.png" alt="" />
      <img className="cloud" src="../src/assets/img/cloud-5.png" alt="" />
    </main>
  );
}
