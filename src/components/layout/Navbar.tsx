import React, { useEffect } from 'react'

const Navbar = () => {
  const toggleSidebarStart = () => {
    console.log(
      'toggleSidebar',
      document.getElementById('app-sidebar-start')?.classList
    )
    if (
      document.getElementById('app-sidebar-start')?.classList.contains('show')
    ) {
      document
        .getElementById('app-sidebar-start')
        ?.classList.replace('show', 'hide')
    } else {
      document
        .getElementById('app-sidebar-start')
        ?.classList.replace('hide', 'show')
    }
  }

  const toggleSidebarEnd = () => {
    console.log(
      'toggleSidebarEnd',
      document.getElementById('app-sidebar-end')?.classList
    )
    if (
      document.getElementById('app-sidebar-end')?.classList.contains('show')
    ) {
      document
        .getElementById('app-sidebar-end')
        ?.classList.replace('show', 'hide')
    } else {
      document
        .getElementById('app-sidebar-end')
        ?.classList.replace('hide', 'show')
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="btn btn-danger"
            type="button"
            onClick={toggleSidebarStart}
          >
            =
          </button>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            =
          </button>
          Navbar: Pixel Perfect App
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <button
                className="btn btn-danger"
                type="button"
                onClick={toggleSidebarEnd}
              >
                =
              </button>
            </span>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start shadow"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
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
