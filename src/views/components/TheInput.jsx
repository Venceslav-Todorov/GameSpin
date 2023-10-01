import { useCallback } from 'react'
import '../../styles/the-reusables.scss'
import PropTypes from 'prop-types'

function TheInput({ onInput, placeholder, modelValue, onEnter, disabled }) {
  function handleKeyDown(e) {
    if (e.key == 'Enter') handleEnter(modelValue)
  }

  const handleEnter = useCallback(
    (e) => {
      if (!disabled) onEnter(e)
    },
    [disabled, onEnter],
  )

  const handleInput = useCallback(
    (e) => {
      if (!disabled) onInput(e)
    },
    [disabled, onInput],
  )

  const hasInput = modelValue ? 'the-input--has-value' : ''
  const disabledClass = disabled ? 'the-input--disabled' : ''

  return (
    <>
      <div className={`the-input ${hasInput} ${disabledClass}`}>
        <input
          placeholder={placeholder ? placeholder : ''}
          value={modelValue}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onInput={(e) => {
            e.preventDefault(), handleInput(e.target.value)
          }}
        />
        <span className="go" onClick={() => handleEnter(modelValue)}>
          GO
        </span>
      </div>
    </>
  )
}

TheInput.propTypes = {
  onInput: PropTypes.func,
  onEnter: PropTypes.func,
  disabled: PropTypes.bool,
  modelValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default TheInput
