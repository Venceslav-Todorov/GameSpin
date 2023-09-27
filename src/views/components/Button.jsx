import { memo, useCallback } from "react";
function Button({ onClick, children, color }) {
  const buttonClass = `the-button ${color ? `the-button--${color}` : ""}`;

  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <>
      <button
        className={buttonClass}
        onClick={(e) => {
          e.preventDefault(), handleOnClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default memo(Button);
