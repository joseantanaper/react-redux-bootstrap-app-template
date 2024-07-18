const Sidebar = () => (
  <>
    <div className="h-100 bg-body-tertiary position-fixed end-0">ESidebar</div>
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex={0}
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Backdrop with scrolling
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
  </>
)
export default Sidebar
