import '@style/base.scss'
import Header from '@/components/layout/Header'
import Navbar from '@/components/common/Navbar'
import Button from './components/common/Button'
import SSidebar from '@components/layout/SSidebar'
import ESidebar from '@components/layout/ESidebar'
import Footer from '@components/layout/Footer'
import LoremIpsum from '@components/common/LoremIpsum'

const App = () => (
  <div className="app">
    <Header />

    {/* <Navbar
      startNodes={[
        <Button toggleId="a" />,
        <Button toggleId="a" />,
        <Button toggleId="a" />,
      ]}
      brand="# Pixel Perfect App Template"
    /> */}
    {/* <Header /> */}
    {/* <SSidebar />
      <ESidebar /> */}
    <Footer />
    <div className="app-main container-fluid text-center">
      <div className="row">
        {/* <div
          id="app-offcanvas-start"
          className="app-offcanvas-start shadow col show vh-100 position-fixed bg-body"
        >
          SidebarStart
        </div> */}
        <div className="app-content col">
          <LoremIpsum />
        </div>
        {/* <div id="app-offcanvas-end" className="app-offcanvas-end shadow col show">
          SidebarEnd
        </div> */}
      </div>
    </div>
  </div>
)

export default App

