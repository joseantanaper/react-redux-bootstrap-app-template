import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import Navbar from '../common/Navbar'
import Button from '../common/Button'
import Sidebar from '../common/Sidebar'
import Offcanvas from '../common/Offcanvas'
import Menu from '@components/common/Menu'

const HeaderDemo = () => {
  const dispatch = useAppDispatch()

  const sidebarStart = useRef<typeof Sidebar | null>()
  const sidebarStartPush = useRef<typeof Sidebar | null>()
  const sidebarEnd = useRef<typeof Sidebar | null>()
  const sidebarEndPush = useRef<typeof Sidebar | null>()

  useEffect(() => {
    // const res = dispatch(test())
    // console.log(res)
  }, [])

  const toggleTheme = () => {
    document.documentElement.setAttribute(
      'data-bs-theme',
      document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  return (
    <>
      <Navbar
        brand={['React Redux App', 'Pixel Perfect Template']}
        startNodes={[
          <div className="btn-group">
            <Button toggleId="offcanvasStart" />
            <Button toggleId="offcanvasStartPush" />
          </div>,
          <div className="btn-group">
            <Button onClick={() => (sidebarStart?.current as any)?.toggle()} />
            <Button
              onClick={() => (sidebarStartPush?.current as any)?.toggle()}
            />
          </div>,
        ]}
        endNodes={[
          <div className="btn-group">
            <Button onClick={() => toggleTheme()} />
          </div>,
          <div className="btn-group">
            <Button
              iconId=""
              onClick={() => (sidebarEnd?.current as any)?.toggle()}
            />
            <Button
              onClick={() => (sidebarEndPush?.current as any)?.toggle()}
            />
          </div>,
          <div className="btn-group">
            <Button toggleId="offcanvasEnd" />
            <Button toggleId="offcanvasEndPush" />
          </div>,
        ]}
      />

      <Sidebar
        ref={sidebarStart}
        title="Sidebar Start"
        id="sidebarStart"
        position="offcanvas-start"
      >
        <Menu />
      </Sidebar>
      <Sidebar
        ref={sidebarStartPush}
        title="Sidebar Start (Push)"
        id="sidebarStartPush"
        position="offcanvas-start"
        pushContent={true}
      >
        <Menu />
      </Sidebar>

      <Sidebar
        ref={sidebarEnd}
        title="Sidebar End"
        id="sidebarEnd"
        position="offcanvas-end"
      />
      <Sidebar
        ref={sidebarEndPush}
        title="Sidebar End (Push)"
        id="sidebarEndPush"
        position="offcanvas-end"
        pushContent={true}
      />

      <Offcanvas
        title="Offcanvas Start"
        id="offcanvasStart"
        position="offcanvas-start"
      />
      <Offcanvas
        title="Offcanvas Start (Push)"
        id="offcanvasStartPush"
        position="offcanvas-start"
        pushContent={true}
      />
      <Offcanvas
        title="Offcanvas End"
        id="offcanvasEnd"
        position="offcanvas-end"
      />
      <Offcanvas
        title="Offcanvas End (Push)"
        id="offcanvasEndPush"
        position="offcanvas-end"
        pushContent={true}
      />
    </>
  )
}

export default HeaderDemo
