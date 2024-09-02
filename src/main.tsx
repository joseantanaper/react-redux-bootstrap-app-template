import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom'
import Root from './routes/root'
import About from './routes/about'
import Home from './routes/home'
import Content from './routes/content'
import { store } from '@app/store'
import '@style/base.scss'
import '@bootstrap-js'

const router = createBrowserRouter([
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
])

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
