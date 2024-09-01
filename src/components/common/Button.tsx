import React, { type MouseEvent } from 'react'
import { type BtnParam } from '../types'
import Icon from './Icon'

const Button = (button: BtnParam) => {
  const onClickHandler = (e: MouseEvent) => {
    if (button.onClick) button.onClick(e)
    if (button.toggleId) {
      // if (
      //   document.documentElement?.classList.contains('app-offcanvas-start-show')
      // ) {
      //   document.documentElement?.classList.remove('app-offcanvas-start-show')
      // } else {
      //   document.documentElement?.classList.add('app-offcanvas-start-show')
      // }
      // if (
      //   document.getElementById(button.toggleId)?.classList.contains('hiding')
      // ) {
      //   document.documentElement?.classList.remove('app-offcanvas-start-show')
      // } else if (
      //   document.getElementById(button.toggleId)?.classList.contains('show') ||
      //   document.getElementById(button.toggleId)?.classList.contains('showing')
      // ) {
      //   document.documentElement?.classList.add('app-offcanvas-start-show')
      // }
    }
  }

  return (
    // d-block d-md-none
    <button
      className={`${button.toggleId ? 'navbar-toggler' : 'btn'}${button.className ? ' btn-'.concat(button.className) : ''}`}
      type="button"
      onClick={(e) => onClickHandler(e)}
      data-bs-toggle={button.toggleId ? 'offcanvas' : undefined}
      data-bs-target={button.toggleId ? '#'.concat(button.toggleId) : undefined}
      aria-controls={button.toggleId ? button.toggleId : undefined}
    >
      {button.toggleId && !button.icon ? (
        <span className="navbar-toggler-icon"></span>
      ) : (
        <Icon />
      )}

      {button.label && <span>{button.label}</span>}
    </button>
  )
}

export default Button
