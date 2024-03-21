//Config. para poder utilizar REACT-DOM (crear browser + config. routes)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes;