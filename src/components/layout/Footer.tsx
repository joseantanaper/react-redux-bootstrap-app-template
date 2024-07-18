const Footer = () => (
  <nav className="navbar fixed-bottom shadow bg-body-tertiary">
    <div className="container-fluid">
      <div className="d-flex justify-content-start align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Footer
        </a>
      </div>
      <div className="justify-content-end">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
)

export default Footer
