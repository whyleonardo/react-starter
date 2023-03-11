import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/App'
import { ErrorPage } from '@/routes/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])
