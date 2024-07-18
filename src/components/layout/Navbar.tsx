import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { test } from '@app/slice/appSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const res = dispatch(test())
    console.log(res)
  }, [])

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
      <nav className="navbar fixed-top bg-body-tertiary shadow">
        <div className="container-fluid">
          <div className="d-flex justify-content-start align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebarStart}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
              Pixel Perfect App Template
            </a>
          </div>
          <div className="justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebarEnd}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="app-sidebar-start"
        className="app-sidebar-start shadow col show vh-100 position-fixed bg-body-tertiary"
      >
        SidebarStart
      </div>

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
