import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import { type OffcanvasParam } from '../types'

const Sidebar = forwardRef(function SidebarPlus(sidebar: OffcanvasParam, ref) {
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

  console.log('sidebar', sidebar?.children)

  return (
    <div
      ref={sidebarRef}
      id={`${sidebar?.id}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show`}
    >
      {sidebar?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{sidebar?.title}</h5>
          <button
            type="button"
            className="btn btn-close d-flex float-end"
            // data-bs-dismiss="offcanvas"
            // aria-label="Close"
            onClick={toggle}
          ></button>
        </div>
      )}
      <div
        className={`offcanvas-body${sidebar?.title ? ' '.concat('border-top') : ''}`}
      >
        {sidebar?.children}
      </div>
    </div>
  )
})

export default Sidebar
