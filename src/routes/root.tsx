import React, { useEffect } from 'react'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import { Outlet } from 'react-router-dom'

import {
  toggleTheme,
  toggleSidebar,
  selectSidebar,
  toggleSidebarMode,
} from '@app/slice/appSlice'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@app/hooks'

import '@style/base.scss'

const App = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const storedSidebar = useAppSelector(selectSidebar)

  const clientSidebarStartToggle = () => {
    console.log('clientSidebarToggle')
    dispatch(toggleSidebar())
  }

  const localToggleTheme = () => {
    dispatch(toggleTheme())
    document.documentElement.setAttribute(
      'data-bs-theme',
      document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  useEffect(() => {
    // console.log('Sidebar', 'collapsed', storedSidebar.collapsed)
    document.documentElement?.setAttribute(
      'data-app-offcanvas-start-collapsed',
      storedSidebar.collapsed
    )
  }, [storedSidebar.collapsed])

  useEffect(() => {
    // console.log('Sidebar', 'mode', storedSidebar.mode)
    document.documentElement?.setAttribute(
      'data-app-offcanvas-start-mode',
      storedSidebar.mode
    )
  }, [storedSidebar.mode])

  useEffect(() => {
    document.documentElement?.setAttribute(
      'data-app-offcanvas-start-mode',
      storedSidebar.mode
    )
    document.documentElement?.setAttribute(
      'data-app-offcanvas-start-collapsed',
      storedSidebar.collapsed
    )
  }, [])

  useEffect(() => {
    if (storedSidebar.mode === 0) dispatch(toggleSidebar())
  }, [location])

  return (
    <div className="app">
      <Header />
      <Footer />
      <div className="app-main container-fluid text-center">
        <div className="row">
          <div className="app-content col">
            {window.location.pathname}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
