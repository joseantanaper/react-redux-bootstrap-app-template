import React from 'react'
import Navbar from '../common/Navbar'
import Button from '../common/Button'
const Footer = () => (
  <Navbar
    brand={['Footer', 'More...']}
    position="fixed-bottom"
    endNodes={[
      <div className="btn-group">
        <Button toggleId="offcanvasEnd" />
        <Button toggleId="offcanvasEndPush" />
      </div>,
    ]}
  />
)

export default Footer
