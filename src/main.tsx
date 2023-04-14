import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux';
import routes from './router/index'
import store from './store/index'


const GetRoutes = () => { return useRoutes(routes) }
const SetRoutes = () => { return <Router><GetRoutes></GetRoutes></Router> }
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SetRoutes></SetRoutes>
    </Provider>
  </React.StrictMode>,
)
