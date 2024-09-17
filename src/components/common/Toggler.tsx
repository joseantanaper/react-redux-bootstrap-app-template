import React, { useRef, type MouseEvent } from 'react'
import { type BtnParam } from '../types'
import Icon from './Icon'
import app from '@utils/app'

const Toggler = (button: BtnParam) => {
  const clickBeforeToggle = () => {
    const sidebarObj = document.getElementById(
      String(button?.toggleId)
    ) as HTMLDivElement
    const backdrop = Boolean(sidebarObj?.dataset?.bsBackdrop === 'true' || true)
    if (!backdrop) app.sidebar.toggle(sidebarObj)
  }

  return (
    <button
      className={`navbar-toggler`}
      type="button"
      data-bs-toggle={button.toggleId ? 'offcanvas' : undefined}
      data-bs-target={button.toggleId ? '#'.concat(button.toggleId) : undefined}
      aria-controls={button.toggleId ? button.toggleId : undefined}
      onClick={clickBeforeToggle}
    >
      {button?.iconId ? (
        <Icon id={button?.iconId} />
      ) : (
        <span className="navbar-toggler-icon"></span>
      )}
    </button>
  )
}

export default Toggler
