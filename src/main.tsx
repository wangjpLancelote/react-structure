import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Providers from './Providers.tsx'
import './index.css'
import './styles/tailwind.css'
import './styles/globalStyle.ts'
import './styles/index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
