function Box({ onClick, isSelected, type }) {
  return (
    <main
      onClick={(e) => {
        isSelected ? null : (e.preventDefault, onClick());
      }}
      className={`the-box ${isSelected ? "the-box--selected" : ""}`}
    >
      <img src={`../../src/assets/img/${type}.svg`} alt="" />
    </main>
  );
}

export default Box;
