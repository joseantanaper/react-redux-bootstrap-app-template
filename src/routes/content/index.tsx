import React from 'react'
import { useLoaderData } from 'react-router-dom'
import LoremIpsum from '@/components/common/LoremIpsum'

const Content = () => {
  const params = useLoaderData() as any
  return (
    <>
      <h1>{params?.title && params?.title}</h1>
      <LoremIpsum count={24} />
    </>
  )
}

export default Content
