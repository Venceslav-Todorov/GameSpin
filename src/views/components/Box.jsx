import { useCallback } from 'react'
import PropTypes from 'prop-types'

function Box({ onClick, disabled, isSelected, type }) {
  const boxClass = `the-box ${isSelected ? 'the-box--selected' : ''} ${
    disabled ? 'the-box--disabled' : ''
  }`

  const handleClick = useCallback(() => {
    if (!isSelected && !disabled) onClick()
  }, [onClick, isSelected, disabled])

  return (
    <main
      className={boxClass}
      onClick={(e) => {
        isSelected ? null : (e.preventDefault, handleClick())
      }}
    >
      <img src={`../../src/assets/img/${type}.svg`} alt="" />
    </main>
  )
}

Box.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  isSelected: PropTypes.bool,
  type: PropTypes.string.isRequired,
}

export default Box
