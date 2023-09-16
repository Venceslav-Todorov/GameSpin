function Button({ onClick, children, color }) {
  return (
    <>
      <button
        className={`the-button`}
        // style={
        //   backgroundColor
        //     ? { backgroundColor: color }
        //     : "currentColor"
        // }
        onClick={(e) => {
          e.preventDefault(), onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
