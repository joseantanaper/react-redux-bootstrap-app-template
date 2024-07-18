import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'

const LoremIpsum = () => (
  <>
    {loremIpsum({ p: 10, random: true }).map((text, idx) => (
      <p key={idx}>{text}</p>
    ))}
  </>
)

export default LoremIpsum
