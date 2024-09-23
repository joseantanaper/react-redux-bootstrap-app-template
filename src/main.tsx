import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Root from './routes/root'
import About from './routes/about'
import Home from './routes/home'
import Content from './routes/content'
import { store, persistor } from '@app/store'
import '@style/base.scss'

import '@bootstrap-js'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      loader: () => ({
        title: 'Root',
        subtitle: 'Subtitle',
      }),
      children: [
        {
          index: true,
          path: '/',
          element: <Home />,
          loader: () => ({
            title: 'Home',
            subtitle: 'Subtitle',
          }),
        },
        {
          path: '/content',
          element: <Content />,
          loader: () => ({
            title: 'Content',
            subtitle: 'Subtitle',
          }),
        },
        {
          path: '/about',
          element: <About />,
          loader: () => ({
            title: 'About',
            subtitle: 'Subtitle',
          }),
        },
      ],
    },
  ],

  { basename: window.location.pathname }
  // { basename: '' /* window.location.pathname */ }

  // {
  //   basename:
  //     process.env.NODE_ENV === 'development'
  //       ? ''
  //       : '/react-redux-bootstrap-app-template',
  // }
)

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  // console.log('main', persistor)

  // console.log(JSON.stringify(window.location))

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
