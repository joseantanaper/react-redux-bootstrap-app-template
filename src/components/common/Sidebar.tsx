import React, { useRef } from 'react'
import { type OffcanvasParam } from '../types'

const Sidebar = (sidebar: OffcanvasParam) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => {
    console.log('toggle', sidebarRef?.current)
    if (sidebarRef?.current?.classList.contains('show')) {
      sidebarRef?.current?.classList.remove('show')
      document.documentElement?.classList.remove(
        `app-${sidebar?.position}-show`
      )
    } else {
      sidebarRef?.current?.classList.add('show')
      if (sidebar.pushContent)
        document.documentElement?.classList.add(`app-${sidebar?.position}-show`)
    }
  }

  return (
    <div
      ref={sidebarRef}
      id={`app-${sidebar?.position}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show`}
    >
      Sidebar+
      <hr />
      <button onClick={toggle}>!</button>
    </div>
  )
}

export default Sidebar
