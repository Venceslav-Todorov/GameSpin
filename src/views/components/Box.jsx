import { memo } from "react";

function Box({ onClick, disabled, isSelected, type }) {
  const boxClass = `the-box ${isSelected ? "the-box--selected" : ""} ${
    disabled ? "the-box--disabled" : ""
  }`;
  return (
    <main
      className={boxClass}
      onClick={(e) => {
        isSelected ? null : (e.preventDefault, onClick());
      }}
    >
      <img src={`../../src/assets/img/${type}.svg`} alt="" />
    </main>
  );
}

export default memo(Box);
