import React from 'react'
import { Header } from './'
import { Intro } from './'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
