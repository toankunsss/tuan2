import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Approuter from './routers/Approuter.jsx'
import App from './App.jsx'
import 'antd/dist/reset.css'
import './styles/global.scss'
import './styles/_variables.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approuter/>
  </StrictMode>
)
