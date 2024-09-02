import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@components/layout/Footer'

const About = () => {
  const params = useLoaderData() as any
  return (
    <>
      <h1>{params?.title && params?.title}</h1>
      About...
    </>
  )
}

export default About
