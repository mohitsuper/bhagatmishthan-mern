import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style/index.css'
import App from './App.jsx'
// import './Style/custom.css'
import { BrowserRouter } from 'react-router-dom'
import { AddToCardProdvider, AddToCardVal } from './UseContext/AddToCardContext.jsx'
import { FavouriteProvider } from './UseContext/FavouriteCardContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AddToCardProdvider>
        <FavouriteProvider>
          <App />
        </FavouriteProvider>
      </AddToCardProdvider>
    </BrowserRouter>
  </StrictMode>,
)
