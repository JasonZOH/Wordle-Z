import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'


createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  //</StrictMode>,
)
