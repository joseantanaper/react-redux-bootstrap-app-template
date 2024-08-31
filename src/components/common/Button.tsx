import React from 'react'
import { type Btn } from '../types'
import Icon from './Icon'

const Button = (button: Btn) => {
  return (
    // d-block d-md-none
    <button
      className={`${button.toggleId ? 'navbar-toggler' : 'btn'}${button.className ? ' btn-'.concat(button.className) : ''}`}
      type="button"
      onClick={() => (button.onClick ? button.onClick() : undefined)}
      data-bs-toggle={button.toggleId ? 'offcanvas' : undefined}
      data-bs-target={button.toggleId ? '#'.concat(button.toggleId) : undefined}
      aria-controls={button.toggleId ? button.toggleId : undefined}
    >
      <Icon />
      {button.label && <span>{button.label}</span>}
    </button>
  )
}

export default Button
