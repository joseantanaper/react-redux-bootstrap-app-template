import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { type OffcanvasParam } from '../types'
import Icon from './Icon'

const Sidebar = forwardRef((sidebar: OffcanvasParam, ref) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<0 | 1>(0)

  useEffect(() => {}, [])

  useEffect(() => {}, [visible])
  useEffect(() => {
    document.documentElement?.setAttribute(
      'data-app-sidebar-start-mode',
      String(mode)
    )
  }, [mode])

  const toggle = (closeIt = false) => {
    // console.log(sidebar.pushContent)
    if (closeIt || sidebarRef?.current?.classList.contains('show')) {
      sidebarRef?.current?.classList.remove('show')
      document.documentElement?.classList.remove(
        `app-${sidebar?.position}-show`
      )
    } else {
      setVisible(true)
      sidebarRef?.current?.classList.add('show')

      if (sidebar?.pushContent)
        document.documentElement?.classList.add(`app-${sidebar?.position}-show`)
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

  console.log('sidebar', sidebar?.children)

  return (
    <div
      ref={sidebarRef}
      id={`${sidebar?.id}`}
      className={`app-offcanvas position-fixed app-${sidebar?.position} app-${sidebar?.position}-show p-0`}
    >
      {sidebar?.title && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            {sidebar?.title} {mode}
          </h5>
          <div className="btn-group position-absolute end-0">
            <button
              type="button"
              className="btn"
              // data-bs-dismiss="offcanvas"
              // aria-label="Close"
              onClick={() => toggleFix()}
            >
              <Icon id={mode ? 'pinFill' : 'pin'} />
            </button>
            <button
              type="button"
              className="btn"
              // data-bs-dismiss="offcanvas"
              // aria-label="Close"
              onClick={() => toggle()}
            >
              <Icon id="close" />
            </button>
          </div>

          {/* <button
            type="button"
            className="btn btn-close d-flex float-end"
            // data-bs-dismiss="offcanvas"
            // aria-label="Close"
            style={{ marginLeft: '10px' }}
            onClick={() => toggle(true)}
          ></button> */}
        </div>
      )}
      <div
        // className={`offcanvas-body${sidebar?.title ? ' '.concat('border-top') : ''}`}
        className={`offcanvas-body`}
      >
        {sidebar?.children}
      </div>
    </div>
  )
})

export default Sidebar
