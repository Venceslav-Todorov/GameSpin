import "../../styles/the-reusables.scss";

export default function TheInput({ onInput, placeholder, modelValue, onEnter, disabled }) {

  function handleKeyDown(e) {
    if (e.key == "Enter") onEnter(modelValue);
  }

  return (
    <>
      <div className={`the-input ${modelValue ? "the-input--has-value" : ""}`}>
        <input
          placeholder={placeholder ? placeholder : ""}
          value={modelValue}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onInput={(e) => {
            e.preventDefault(), onInput(e.target.value);
          }}
        />
        <span className="go" onClick={() => onEnter(modelValue)}>
          GO
        </span>
      </div>
    </>
  );
}

