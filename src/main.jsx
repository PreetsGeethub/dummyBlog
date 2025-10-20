import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'  // ✅ Add this import
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>  {/* ✅ Add this wrapper */}
        <App />
      </BrowserRouter>  {/* ✅ Add this closing tag */}
    </Provider>
  </StrictMode>,
)