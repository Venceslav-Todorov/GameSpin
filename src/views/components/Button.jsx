import { useCallback } from 'react'
import PropTypes from 'prop-types'

function Button({ onClick, children, color }) {
  const buttonClass = `the-button ${color ? `the-button--${color}` : ''}`

  const handleOnClick = useCallback(
    (e) => {
      // emit onClick only when we have it as a prop
      if (onClick()) {
        e.preventDefault()
        onClick()
      }
    },
    [onClick],
  )

  return (
    <>
      <button
        className={buttonClass}
        onClick={(e) => {
          handleOnClick(e)
        }}
      >
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
}

export default Button
