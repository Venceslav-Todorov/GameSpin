import { memo } from 'react';
import "../../styles/the-reusables.scss"; 

function TheInput({ onInput, placeholder, modelValue, onEnter, disabled }) {

  function handleKeyDown(e) {
    if (e.key == "Enter") onEnter(modelValue);
  }

const hasInput = modelValue ? "the-input--has-value" : "" 

  return (
    <>
      <div className={`the-input ${hasInput}`}>
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

export default memo(TheInput)