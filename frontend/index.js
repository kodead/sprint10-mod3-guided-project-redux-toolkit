// this is where we mount the react tree onto the dom
import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
// import utility called provider from react redux Library
// this provider component allows to wrap the application 
// in order to provide the store to the entire tree
import { Provider } from 'react-redux'
//import the store we created inside the state folder
import { store } from './state/store'
const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  // wrap the app component with the provider
  <Provider store={store}>
    <App />
  </Provider>
)
