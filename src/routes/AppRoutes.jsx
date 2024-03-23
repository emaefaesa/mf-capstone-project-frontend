//Config. para poder utilizar REACT-DOM (crear browser + config. routes)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                }
                {
                    path: '/cats',
                    element: <div></div>
                }
            ]
        },
        {
            path: '/home',
            element: <HomePage />
        }

    ])

    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes;