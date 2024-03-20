//Config. para poder utilizar REACT-DOM (crear browser + config. routes)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navbar />
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes;