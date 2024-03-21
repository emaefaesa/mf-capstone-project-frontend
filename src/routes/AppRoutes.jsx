//Config. para poder utilizar REACT-DOM (crear browser + config. routes)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Footer />
        }
    ])

    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes;