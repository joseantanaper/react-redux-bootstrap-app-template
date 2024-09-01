import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { type OffcanvasParam } from '../types'

const SidebarPlus = forwardRef(function SidebarPlus(
  sidebar: OffcanvasParam,
  ref
) {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const test = () => {
    alert('test')
  }

  const toggle = () => {
    // console.log(sidebar.pushContent)
    if (sidebarRef?.current?.classList.contains('show')) {
      sidebarRef?.current?.classList.remove('show')
      document.documentElement?.classList.remove(
        `app-${sidebar?.position}-show`
      )
    } else {
      sidebarRef?.current?.classList.add('show')

      if (sidebar?.pushContent)
        document.documentElement?.classList.add(`app-${sidebar?.position}-show`)
    }
    return true
  }

  useImperativeHandle(ref, () => {
    return {
      toggle: toggle,
    }
  })

  return (
    <div
      ref={sidebarRef}
      id={`${sidebar?.id}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show`}
    >
      {sidebar.id} | {JSON.stringify(sidebar.pushContent)}
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
      </div>
      PUSH: {JSON.stringify(sidebar?.pushContent)}
    </div>
  )
})

export default SidebarPlus
