import React, { useEffect, useRef } from 'react'
import { type OffcanvasParam } from '../../types'

const Offcanvas = (offcanvas: OffcanvasParam) => {
  const offcanvasRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (offcanvasRef?.current) {
      offcanvasRef.current?.addEventListener('hide.bs.offcanvas', (event) => {
        // console.log('hide', offcanvasRef.current?.id)
        document.documentElement?.classList?.remove(
          `app-${offcanvas.position}-show`
        )
      })

      offcanvasRef?.current?.addEventListener('show.bs.offcanvas', (event) => {
        // console.log('show', offcanvasRef.current?.id)
        document.documentElement?.classList?.add(
          `app-${offcanvas.position}-show`
        )
      })
    }
  }, [])

  return (
    <div
      ref={offcanvasRef}
      className={`offcanvas ${offcanvas.position ? ' '.concat(offcanvas.position) : ''}`}
      data-bs-scroll={true}
      data-bs-backdrop={false}
      tabIndex={-1}
      id={offcanvas.id}
      aria-labelledby={offcanvas.id}
    >
      {offcanvas?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{offcanvas?.title}</h5>
          <button
            type="button"
            className="btn text-warning btn-close d-flex float-end"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div
        className={`offcanvas-body${offcanvas?.title ? ' '.concat('border-top') : ''}`}
      >
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
  )
}

export default Offcanvas
