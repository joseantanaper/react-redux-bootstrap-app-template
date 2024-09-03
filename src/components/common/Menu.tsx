import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'

const Menu = () => {
  return (
    <div className="accordion border-0" id="accordionExample">
      <div className="accordion-item border-0">
        <h2 className="accordion-header border-0">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse border-0 collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body border-0 p-0">
            <div className="list-group ps-3">
              <NavLink
                to="/"
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <Icon id="home" />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/content"
                className="list-group-item list-group-item-action"
              >
                <Icon id="specialties" />
                <span>Content</span>
              </NavLink>
              <NavLink
                to="/about"
                className="list-group-item list-group-item-action"
              >
                <Icon id="about" />
                <span>About</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
