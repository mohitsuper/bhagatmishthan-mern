import { useContext, useState } from 'react'
import Allrouter from './pages/router/router'
import Header from './Commen-components/Header/Header'
import TopBar from './Commen-components/TopBar/TopBar'
import Footer from './Commen-components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {ToastContainer } from 'react-toastify'
import { AddToCardVal } from './UseContext/AddToCardContext'
import {  FavouriteProvider } from './UseContext/FavouriteCardContext'
function App() {
  return (
    <FavouriteProvider>
      <div className=''>
      <ToastContainer />
      <TopBar/>
      <Header/>
      <Allrouter/>
      <Footer/>
      </div>
    </FavouriteProvider>
  )
}

export default App
