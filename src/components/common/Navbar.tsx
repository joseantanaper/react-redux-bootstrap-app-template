import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { test } from '@app/slice/appSlice'
import Icon from '../common/Icon'
import SSidebar from '@components/layout/SSidebar'
import ESidebar from '@components/layout/ESidebar'
import Button from './Button'
import { type NavbarParam } from '../types'

const Navbar = (navbar: NavbarParam) => {
  const dispatch = useAppDispatch()

  const sidebarStart = 'app-sidebar-start'
  const sidebarEnd = 'app-sidebar-end'

  useEffect(() => {
    const res = dispatch(test())
    console.log(res)
  }, [])

  const leftArea = () => {
    const buttons = [
      { className: 'btn', onClick: () => toggleSSidebar(false) },
      { className: 'btn', onClick: () => toggleSSidebar(true) },
      { className: 'btn', toggle: 'offcanvasStart' },
    ]
    return (
      <div className="d-flex align-items-center justify-content-start">
        <div className="btn-group">
          {buttons.map((button) => (
            <>
              <button
                className={`${button.className} d-block d-md-none`}
                type="button"
                onClick={() => button && button?.onClick && button.onClick()}
                data-bs-toggle={button?.toggle ? 'offcanvas' : undefined}
                data-bs-target={
                  button?.toggle ? '#'.concat(button?.toggle) : undefined
                }
                aria-controls={button?.toggle ? button?.toggle : undefined}
              >
                <Icon />
              </button>
              <button
                className={`navbar-toggler d-none d-md-block`}
                type="button"
                onClick={() => button && button?.onClick && button.onClick()}
                data-bs-toggle={button?.toggle ? 'offcanvas' : undefined}
                data-bs-target={
                  button?.toggle ? '#'.concat(button?.toggle) : undefined
                }
                aria-controls={button?.toggle ? button?.toggle : undefined}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </>
          ))}
        </div>
      </div>
    )
  }

  const toggleSSidebar = (contentDisplacement = false) => {
    console.log(
      'toggleSSidebar',
      document.getElementById(sidebarStart)?.classList
    )
    if (document.getElementById(sidebarStart)?.classList.contains('show')) {
      document.getElementById(sidebarStart)?.classList.remove('show')
      document.documentElement?.classList.remove('app-sidebar-start-show')
    } else {
      document.getElementById(sidebarStart)?.classList.add('show')
      if (contentDisplacement)
        document.documentElement?.classList.add('app-sidebar-start-show')
    }
  }

  const toggleESidebar = (contentDisplacement = false) => {
    console.log(
      'toggleESidebar',
      document.getElementById(sidebarEnd)?.classList
    )
    if (document.getElementById(sidebarEnd)?.classList.contains('show')) {
      document.getElementById(sidebarEnd)?.classList.remove('show')
      document.documentElement?.classList.remove('app-sidebar-end-show')
    } else {
      document.getElementById(sidebarEnd)?.classList.add('show')
      if (contentDisplacement)
        document.documentElement?.classList.add('app-sidebar-end-show')
    }
  }

  const toggleTheme = () => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-start">
            {navbar.startNodes && navbar.startNodes.map((node) => node)}
          </div>

          {navbar.brand && (
            <a className="navbar-brand d-none d-md-block w-100 " href=".">
              <div className="text-nowrap overflow-hidden text-truncate opacity">
                {Array.isArray(navbar.brand) ? (
                  navbar.brand.map((brand) => <span>{brand}</span>)
                ) : (
                  <span>{navbar.brand}</span>
                )}
              </div>
            </a>
          )}

          <div className="d-flex align-items-center justify-content-start">
            {navbar.endNodes && navbar.endNodes.map((node) => node)}
          </div>
        </div>
      </nav>

      <SSidebar />

      <ESidebar />

      <div
        className="offcanvas offcanvas-start shadow"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasStart"
        aria-labelledby="offcanvasStart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasStartLabel">
            Backdrop with scrolling
          </h5>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end shadow"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasEnd"
        aria-labelledby="offcanvasEnd"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasEndLabel">
            Backdrop with scrolling
          </h5>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
