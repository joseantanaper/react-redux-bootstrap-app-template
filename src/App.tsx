import Navbar from './components/layout/Navbar'
import SSidebar from './components/layout/SSidebar'
import ESidebar from './components/layout/ESidebar'
import Footer from './components/layout/Footer'
const App = () => (
  <div className="app">
    <Navbar />
    <SSidebar />
    <ESidebar />
    <Footer />
    <div className="container text-center">
      <div className="row">
        <div className="col">Column</div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
      <div className="row" style={{ height: '1024px' }}>
        <div className="col">Column</div>
      </div>
    </div>
  </div>
)

export default App

