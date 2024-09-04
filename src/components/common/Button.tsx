import React, { type MouseEvent } from 'react'
import { ReactNode } from 'react'
import Icon from './Icon'
import { type BtnParam } from '../types'

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
      className={`${button.mode === 'toggle' ? 'navbar-toggler' : 'btn'}${button.className ? ' btn-'.concat(button.className) : ''}`}
      type="button"
      onClick={(e) => onClickHandler(e)}
      data-bs-toggle={button.toggleId ? 'offcanvas' : undefined}
      data-bs-target={button.toggleId ? '#'.concat(button.toggleId) : undefined}
      aria-controls={button.toggleId ? button.toggleId : undefined}
    >
      {button?.mode === 'toggle' && !button?.iconId ? (
        <span className="navbar-toggler-icon"></span>
      ) : button?.iconId ? (
        <Icon id={button?.iconId} size={button?.iconSize || undefined} />
      ) : (
        <Icon id="" />
      )}
      {button.label && <span>{button.label}</span>}
    </button>
  )
}

export default Button
