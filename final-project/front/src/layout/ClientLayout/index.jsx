import React from 'react'
import ClientHeader from '../../pages/Client/ClientHeader'
import { Outlet } from 'react-router-dom'
import ClientFooter from '../../pages/Client/ClientFooter'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader/>
      <Outlet/>
      <ClientFooter/>
    </div>
  )
}

export default ClientLayout
