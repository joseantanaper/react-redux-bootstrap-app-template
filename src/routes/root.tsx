import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@components/layout/Footer'
import { Outlet } from 'react-router-dom'
import '@style/base.scss'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
      <div className="app-main container-fluid text-center">
        <div className="row">
          <div className="app-content col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

