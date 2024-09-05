import React, { useEffect } from 'react'
import { type NavbarParam } from '../types'

const Navbar = (navbar: NavbarParam) => {
  useEffect(() => {}, [])

  return (
    <>
      <nav
        className={`navbar ${navbar?.position ? navbar?.position : 'fixed-top'}`}
      >
        <div className="container-fluid">
          {navbar.startNodes && (
            <div className="d-flex align-items-center justify-content-start">
              {navbar.startNodes && navbar.startNodes.map((node) => node)}
            </div>
          )}

          {navbar.brand && (
            <a className="navbar-brand w-100" href=".">
              <div className="text-nowrap overflow-hidden text-truncate opacity">
                {Array.isArray(navbar.brand) ? (
                  navbar.brand.map((brand) => <span>{brand}</span>)
                ) : (
                  <span>{navbar.brand}</span>
                )}
              </div>
            </a>
          )}

          {navbar.endNodes && (
            <div className="d-flex align-items-center justify-content-start">
              {navbar.endNodes && navbar.endNodes.map((node) => node)}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
