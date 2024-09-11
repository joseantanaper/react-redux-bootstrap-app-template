import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import app from '@utils/app'
import { type OffcanvasParam } from '../types'
import Icon from './Icon'

import {
  toggleSidebar,
  selectSidebar,
  toggleSidebarMode,
} from '@app/slice/appSlice'

const Sidebar = forwardRef((sidebar: OffcanvasParam, ref) => {
  const dispatch = useAppDispatch()
  const storedSidebar = useAppSelector(selectSidebar)
  const sidebarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    app.sidebar.restore(storedSidebar)
  }, [])

  useEffect(() => {
    // console.log('Sidebar', 'collapsed', storedSidebar.collapsed)
    app.sidebar.collapse(storedSidebar.collapsed)
  }, [storedSidebar.collapsed])
  useEffect(() => {
    // console.log('Sidebar', 'mode', storedSidebar.mode)
    app.sidebar.mode(storedSidebar.mode)
  }, [storedSidebar.mode])

  const linkEventsListeners = () => {
    const conditionalToggle = () => {
      const clickCurrentMode = Number(
        document.documentElement?.getAttribute('data-app-offcanvas-start-mode')
      )
      console.log('conditionalToggle', clickCurrentMode)
      if (clickCurrentMode === 0) dispatch(toggleSidebar())
    }
    sidebarRef.current?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        conditionalToggle()
      })
    })
  }

  const toggleMode = () => {
    dispatch(toggleSidebarMode())
  }

  useImperativeHandle(ref, () => {
    return {
      toggle: () => {
        dispatch(toggleSidebar())
      },
      toggleMode: toggleMode,
    }
  })

  return (
    <div
      ref={sidebarRef}
      id={`${sidebar?.id}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} p-0`}
    >
      {sidebar?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            {sidebar?.title} | {storedSidebar.mode} | {storedSidebar.collapsed}
          </h5>
          <div className="btn-group position-absolute end-0">
            <button type="button" className="btn" onClick={() => toggleMode()}>
              <Icon id={storedSidebar.mode === 0 ? 'pin' : 'pinFill'} />
            </button>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="app-offcanvas"
              onClick={() => dispatch(toggleSidebar())}
            >
              <Icon id="close" />
            </button>
          </div>
        </div>
      )}
      <div className={`offcanvas-body`}>{sidebar?.children}</div>
    </div>
  )
})

export default Sidebar
