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

  const dispatch = useAppDispatch()

  // const togglePush = () => {
  //   if (offcanvasRef?.current?.dataset?.bsBackdrop !== 'true') {
  //     offcanvasRef?.current?.setAttribute('data-bs-backdrop', 'true')
  //     backdropRef?.current?.classList?.remove('d-none')
  //   } else {
  //     offcanvasRef?.current?.setAttribute('data-bs-backdrop', 'false')
  //     backdropRef?.current?.classList?.add('d-none')
  //   }
  // }

  useEffect(() => {
    // offcanvasRef?.current?.classList?.remove('offcanvas')
  }, [])

  const toggleMode = () => {
    if (offcanvasRef?.current) {
      app.sidebar.toggleMode(offcanvasRef?.current)
    }
  }

  return (
    <div
      ref={offcanvasRef}
      className={`app-offcanvas offcanvas ${offcanvas.position ? ' '.concat(offcanvas.position) : ''}`}
      data-bs-scroll={true}
      data-bs-backdrop={false}
      data-app-push={true}
      tabIndex={-1}
      id={offcanvas.id}
      aria-labelledby={offcanvas.id}
    >
      {offcanvas?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{offcanvas?.title} ***</h5>
          <div className="btn-group position-absolute end-0 me-3">
            <Button onClick={toggleMode} iconId="pin" />
            {/* {!offcanvas?.backdrop && (
                <Button onClick={toggleMode} iconId="pin" />
              )} */}

            <Toggler
              toggleId={offcanvas?.id}
              className="danger"
              iconId="toggleLeft"
            />
          </div>
        </div>
      )}
      <div
        className={`offcanvas-body${offcanvas?.title ? ' '.concat('border-top') : ''}`}
      >
        {offcanvas?.children && offcanvas?.children}
      </div>
    </div>
  )
}

export default Sidebar
