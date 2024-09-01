import React, { useEffect, useRef } from 'react'
import { type OffcanvasParam } from '../types'

const Offcanvas = (offcanvas: OffcanvasParam) => {
  const offcanvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (offcanvas.pushContent === true && offcanvasRef?.current) {
      offcanvasRef.current?.addEventListener('hide.bs.offcanvas', (event) => {
        console.log('hide')
        document.documentElement?.classList?.remove(
          `app-${offcanvas.position}-show`
        )
      })

      offcanvasRef?.current?.addEventListener('show.bs.offcanvas', (event) => {
        console.log('show')
        document.documentElement?.classList?.add(
          `app-${offcanvas.position}-show`
        )
      })
    }
  }, [])

  return (
    <div
      ref={offcanvasRef}
      className={`offcanvas ${offcanvas.position ? ' '.concat(offcanvas.position) : ' offcanvas-start'}`}
      data-bs-scroll={true}
      data-bs-backdrop={false}
      tabIndex={-1}
      id={offcanvas.id}
      aria-labelledby={offcanvas.id}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id={`${offcanvas.id}Label`}>
          Backdrop with scrolling
        </h5>
      </div>
      <div className="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
  )
}

export default Offcanvas
