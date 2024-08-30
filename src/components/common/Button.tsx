import React from 'react'
import Icon from './Icon'

const Button = ({
  className = undefined,
  onClick = () => undefined,
  toggleId = '',
}) => {
  return (
    // d-block d-md-none
    <button
      className={`${toggleId ? 'navbar-toggler' : 'btn btn-danger'}`}
      type="button"
      onClick={() => (onClick ? onClick() : undefined)}
      data-bs-toggle={toggleId ? 'offcanvas' : undefined}
      data-bs-target={toggleId ? '#'.concat(toggleId) : undefined}
      aria-controls={toggleId ? toggleId : undefined}
    >
      <Icon />
    </button>
  )
}

export default Button
