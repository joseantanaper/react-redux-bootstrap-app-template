import React, { useState, type forwardRef, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import Navbar from '../common/Navbar'
import Button from '../common/Button'
import Sidebar from '../common/Sidebar'
import Menu from '@components/common/Menu'

import { toggleTheme, selectSidebar } from '@app/slice/appSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const sidebarStart = useRef<typeof forwardRef | any>()
  const sidebarEnd = useRef<typeof forwardRef | any>()

  const storedSidebar = useAppSelector(selectSidebar)

  useEffect(() => {}, [])

  const localToggleTheme = () => {
    dispatch(toggleTheme())
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
            <Button
              mode="toggle"
              toggleId="sidebarStart"
              togglePosition="start"
              iconId="menuxx"
              iconSize={24}
              onClick={() => sidebarStart?.current?.toggle(false)}
            />
          </div>,
        ]}
        endNodes={[
          <div className="btn-group">
            <Button onClick={() => localToggleTheme()} />
          </div>,
          <div className="btn-group">
            <Button iconId="" onClick={() => sidebarEnd?.current?.toggle()} />
          </div>,
          <div className="btn-group">
            <Button toggleId="offcanvasEnd" />
          </div>,
        ]}
      />

      <Sidebar
        ref={sidebarStart}
        id="sidebarStart"
        title="Sidebar Start"
        position="offcanvas-start"
      >
        <Menu />
      </Sidebar>

      <Sidebar
        ref={sidebarEnd}
        title="Sidebar End"
        id="sidebarEnd"
        position="offcanvas-end"
      />
    </>
  )
}

export default Header
