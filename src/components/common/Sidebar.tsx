import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'

import { type OffcanvasParam } from '../types'
import Icon from './Icon'

import { toggleSidebar, selectCounter } from '@app/slice/appSlice'

const Sidebar = forwardRef((sidebar: OffcanvasParam, ref) => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(selectCounter)

  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<0 | 1>(0)

  useEffect(() => {
    sidebarRef.current?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        const dismiss = Number(
          document.documentElement?.getAttribute(
            'data-app-offcanvas-start-mode'
          )
        )
        console.log('click inside', dismiss)
        if (dismiss === 1) {
          toggle()
        }
      })
    })
  }, [])

  useEffect(() => {}, [visible])
  useEffect(() => {
    document.documentElement?.setAttribute(
      'data-app-offcanvas-start-mode',
      String(mode)
    )
  }, [mode])

  useEffect(() => {}, [mode])

  const toggle = async (closeIt = false) => {
    // console.log('Sidebar', 'toggle')
    dispatch(toggleSidebar())
    if (
      !document.documentElement?.getAttribute(
        'data-app-offcanvas-start-show'
      ) ||
      document.documentElement?.getAttribute(
        'data-app-offcanvas-start-show'
      ) === '0'
    ) {
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-show',
        String(1)
      )
      sidebarRef?.current?.classList?.add('show')
      setVisible(true)
    } else {
      document.documentElement?.setAttribute(
        'data-app-offcanvas-start-show',
        String(0)
      )
      sidebarRef?.current?.classList?.remove('show')
      setVisible(false)
    }

    return true
  }

  const toggleFix = () => {
    setMode(mode === undefined || mode === null || mode === 0 ? 1 : 0)
  }

  useImperativeHandle(ref, () => {
    return {
      toggle: toggle,
      toggleFix: toggleFix,
    }
  })

  // console.log('sidebar', sidebar?.children)

  return (
    <div
      ref={sidebarRef}
      id={`${sidebar?.id}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show p-0`}
    >
      {sidebar?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            {sidebar?.title} | {mode} | {counter}
          </h5>
          <div className="btn-group position-absolute end-0">
            <button type="button" className="btn" onClick={() => toggleFix()}>
              <Icon id={mode === 0 ? 'pinFill' : 'pin'} />
            </button>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="app-offcanvas"
              onClick={() => toggle()}
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
