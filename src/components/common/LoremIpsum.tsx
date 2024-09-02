import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum'

const LoremIpsum = (props: any) => {
  const { count = 1 } = props
  return (
    <>
      {loremIpsum({ p: count, random: true }).map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </>
  )
}

export default LoremIpsum
