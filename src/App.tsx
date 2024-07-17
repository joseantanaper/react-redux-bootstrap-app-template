import '@style/base.scss'
import Navbar from './components/layout/Navbar'
import SSidebar from './components/layout/SSidebar'
import ESidebar from './components/layout/ESidebar'
import Footer from './components/layout/Footer'
const App = () => (
  <div className="app">
    <Navbar />
    {/* <SSidebar />
    <ESidebar /> */}
    <Footer />
    <div className="app-main container-fluid text-center">
      <div className="row">
        <div
          id="app-sidebar-start"
          className="app-sidebar-start shadow col show"
        >
          SidebarStart
        </div>
        <div className="app-content col">Content</div>
        <div id="app-sidebar-end" className="app-sidebar-end shadow col show">
          SidebarEnd
        </div>
      </div>
    </div>
  </div>
)

export default App

