import React from 'react'
import ReactDOM from 'react-dom/client'
import CriarFicha from './Routes/CriarFicha.jsx'
import RollDice from './Routes/RollDice.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CriarFicha/>,
  },
  {
    path: "/CriarFicha",
    element: <CriarFicha/>,
  },
  {
    path: "/RollDice",
    element: <RollDice/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
