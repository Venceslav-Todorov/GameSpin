import { memo } from 'react';
function Button({ onClick, children, color }) {
  const buttonClass = `the-button ${color ? `the-button--${color}` : ""}`;
  return (
    <>
      <button
        className={buttonClass}
        onClick={(e) => {
          e.preventDefault(), onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default memo(Button);
