import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */



if(process.env.NODE_ENV==='prod') {
  import('../src/mocks').then(({ setupMocks }) => {
    setupMocks()
  })
  
}

/* if (process.env.NODE_ENV==='development') {
  const { server } = require('../src/mocks')
  server.start()
} */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
