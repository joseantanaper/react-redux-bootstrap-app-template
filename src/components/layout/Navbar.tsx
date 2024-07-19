import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { test } from '@app/slice/appSlice'
import SSidebar from '@components/layout/SSidebar'
import ESidebar from '@components/layout/ESidebar'

const Navbar = () => {
  const dispatch = useAppDispatch()

  const sidebarStart = 'app-sidebar-start'
  const sidebarEnd = 'app-sidebar-end'

  useEffect(() => {
    const res = dispatch(test())
    console.log(res)
  }, [])

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
      <nav className="navbar fixed-top shadow">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-start">
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => toggleSSidebar(false)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => toggleSSidebar(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasStart"
              aria-controls="offcanvasStart"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              Pixel Perfect App Template
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <button
              className="me-5 btn btn-primary"
              type="button"
              onClick={toggleTheme}
            >
              Theme
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasEnd"
              aria-controls="offcanvasEnd"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => toggleESidebar(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => toggleESidebar(false)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
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
