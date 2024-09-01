import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { test } from '@app/slice/appSlice'
import Icon from '../common/Icon'
import Navbar from '../common/Navbar'
import Button from '../common/Button'
import Sidebar from '../common/Sidebar'
import SidebarPlus from '../common/SidebarPlus'
import SSidebar from '@components/layout/SSidebar'
import ESidebar from '@components/layout/ESidebar'
import Offcanvas from '../common/Offcanvas'

const Header = () => {
  const dispatch = useAppDispatch()

  const sidebarStart = useRef<typeof SidebarPlus | null>()
  const sidebarStartPush = useRef<typeof SidebarPlus | null>()

  useEffect(() => {
    const res = dispatch(test())
    console.log(res)
  }, [])

  const toggleSSidebar = (contentDisplacement = false) => {
    // TODO: Get correct object type (Not any)
    return (sidebarStart?.current as any)?.toggle()
  }

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
            <Button />
            <Button />
          </div>,

          <div className="btn-group">
            <Button toggleId="offcanvasEnd" />
            <Button toggleId="offcanvasEndPush" />
          </div>,
        ]}
      />

      <SidebarPlus
        ref={sidebarStart}
        id="sidebarStart"
        position="offcanvas-start"
      />
      <SidebarPlus
        ref={sidebarStartPush}
        id="sidebarStartPush"
        position="offcanvas-start"
        pushContent={true}
      />

      <Offcanvas id="offcanvasStart" position="offcanvas-start" />
      <Offcanvas
        id="offcanvasStartPush"
        position="offcanvas-start"
        pushContent={true}
      />
      <Offcanvas id="offcanvasEnd" position="offcanvas-end" />
      <Offcanvas
        id="offcanvasEndPush"
        position="offcanvas-end"
        pushContent={true}
      />

      {/* <SSidebar />
      <ESidebar /> */}

      {/* <div
        className="offcanvas offcanvas-start shadow"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasStart"
        aria-labelledby="offcanvasStart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasStartLabel">
            Backdrop with scrolling
          </h5>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div> */}
    </>

    // <>
    //   <nav className="navbar fixed-top">
    //     <div className="container-fluid">
    //       <div className="d-flex align-items-center justify-content-start">
    //         {leftArea()}
    //       </div>
    //       <div className="d-flex align-items-center justify-content-between">
    //         <a className="navbar-brand d-none d-md-block" href=".">
    //           Pixel Perfect App Template
    //         </a>
    //       </div>
    //       <div className="d-flex align-items-center justify-content-end">
    //         <div className="btn-group">
    //           <button
    //             className="btn btn-primary"
    //             type="button"
    //             onClick={toggleTheme}
    //           >
    //             <Icon />
    //           </button>
    //         </div>
    //         <div className="btn-group">
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-bs-toggle="offcanvas"
    //             data-bs-target="#offcanvasEnd"
    //             aria-controls="offcanvasEnd"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>

    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             onClick={() => toggleESidebar(true)}
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             onClick={() => toggleESidebar(false)}
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

    //   <SSidebar />

    //   <ESidebar />

    //   <div
    //     className="offcanvas offcanvas-end shadow"
    //     data-bs-scroll="true"
    //     tabIndex={-1}
    //     id="offcanvasEnd"
    //     aria-labelledby="offcanvasEnd"
    //   >
    //     <div className="offcanvas-header">
    //       <h5 className="offcanvas-title" id="offcanvasEndLabel">
    //         Backdrop with scrolling
    //       </h5>
    //     </div>
    //     <div className="offcanvas-body">
    //       <p>
    //         Try scrolling the rest of the page to see this option in action.
    //       </p>
    //     </div>
    //   </div>
    // </>
  )
}

export default Header
