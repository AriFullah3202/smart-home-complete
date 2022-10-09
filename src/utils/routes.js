import React from 'react'
import { createRouter } from '@remix-run/router';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>
    children: [
            {
                path: "/", element: <Home />
                ,
                path: "/home"
            }
        ]
    }

])

export default router
