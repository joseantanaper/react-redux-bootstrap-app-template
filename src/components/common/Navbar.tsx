import React, { useEffect } from 'react'
import { useAppDispatch } from '@app/hooks'
import { test } from '@app/slice/appSlice'
import Icon from '../common/Icon'
import { type NavbarParam } from '../types'

const Navbar = (navbar: NavbarParam) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const res = dispatch(test())
    console.log(res)
  }, [])

  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-start">
            {navbar.startNodes && navbar.startNodes.map((node) => node)}
          </div>

          {navbar.brand && (
            <a className="navbar-brand d-none d-md-block w-100" href=".">
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
    </>
  )
}

export default Navbar
