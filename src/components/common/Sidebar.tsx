import React, { useRef } from 'react'
import { type OffcanvasParam } from '../types'

const Sidebar = (sidebar: OffcanvasParam) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => {
    console.log(sidebar.pushContent)
    if (sidebarRef?.current?.classList.contains('show')) {
      sidebarRef?.current?.classList.remove('show')
      document.documentElement?.classList.remove(
        `${sidebarRef?.current?.id}-show`
      )
    } else {
      sidebarRef?.current?.classList.add('show')
      document.documentElement?.classList.add(`${sidebarRef?.current?.id}-show`)
    }
  }

  return (
    <>
      <div
        ref={sidebarRef}
        id={`app-${sidebar?.position}`}
        className={`app-offcanvas offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show`}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Offcanvas+</h5>
          <button
            type="button"
            className="btn-close d-flex float-end"
            // data-bs-dismiss="offcanvas"
            // aria-label="Close"
            onClick={toggle}
          ></button>
          <hr />
          {/* <button
              type="button"
              className="btn-close float-end d-inline-flex"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={toggle}
            ></button> */}
        </div>
        PUSH: {JSON.stringify(sidebar?.pushContent)}
      </div>
    </>
  )
}

export default Sidebar
