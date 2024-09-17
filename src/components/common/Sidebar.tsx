import { type OffcanvasParam } from '@components/types'
import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import Button from './Button'
import Toggler from './Toggler'
import {
  toggleSidebar,
  selectSidebar,
  toggleSidebarMode,
} from '@app/slice/appSlice'

import app from '@utils/app'

const Sidebar = (offcanvas: OffcanvasParam) => {
  const offcanvasRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)

  const dispatch = useAppDispatch()

  const togglePush = () => {
    if (offcanvasRef?.current?.dataset?.bsBackdrop !== 'true') {
      offcanvasRef?.current?.setAttribute('data-bs-backdrop', 'true')
      backdropRef?.current?.classList?.remove('d-none')
    } else {
      offcanvasRef?.current?.setAttribute('data-bs-backdrop', 'false')
      backdropRef?.current?.classList?.add('d-none')
    }
  }

  const toggleMode = () => {
    if (offcanvasRef?.current) {
      app.sidebar.toggleMode(offcanvasRef?.current)
    }
  }

  const close = () => {
    const myToggler = (
      document?.documentElement?.querySelector(
        `button[data-bs-target="#${offcanvas?.id}"]`
      ) as HTMLButtonElement
    ).click()
    if (offcanvasRef?.current) app.sidebar.collapse(offcanvasRef?.current)
    console.log(`button[data-bs-target='#'${offcanvas?.id}]`)

    const sidebarObj = document.getElementById(
      String(offcanvas?.id)
    ) as HTMLDivElement
    const backdrop = Boolean(sidebarObj?.dataset?.bsBackdrop === 'true' || true)
    if (!backdrop) app.sidebar.toggle(sidebarObj)
  }

  return (
    <>
      <div
        ref={offcanvasRef}
        className={`app-offcanvas${offcanvas?.backdrop ? ' offcanvas' : ''}${offcanvas.position ? ' '.concat(offcanvas.position) : ''}`}
        data-bs-scroll={true}
        data-bs-backdrop={offcanvas?.backdrop || false}
        data-app-push={true}
        tabIndex={-1}
        id={offcanvas.id}
        aria-labelledby={offcanvas.id}
      >
        {offcanvas?.title && (
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">{offcanvas?.title}</h5>
            <div className="btn-group position-absolute end-0 me-3">
              {!offcanvas?.backdrop && (
                <Button onClick={toggleMode} iconId="pin" />
              )}

              <Toggler
                toggleId={offcanvas?.id}
                className="danger"
                iconId="toggleLeft"
              />
              {/* <button
                type="button"
                className="btn btn-close d-flex float-end"
                data-bs-dismiss="offcanvas"
                data-bs-toggle={offcanvas?.id ? 'offcanvas' : undefined}
                data-bs-target={
                  offcanvas?.id ? '#'.concat(offcanvas?.id) : undefined
                }
                aria-controls={offcanvas?.id ? offcanvas?.id : undefined}
                // onClick={close}
              ></button> */}
            </div>
          </div>
        )}
        <div
          className={`offcanvas-body${offcanvas?.title ? ' '.concat('border-top') : ''}`}
        >
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
