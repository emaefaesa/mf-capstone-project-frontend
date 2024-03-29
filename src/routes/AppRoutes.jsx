//Config. para poder utilizar REACT-DOM (crear browser + config. routes)
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import CatsPage from '../pages/CatsPage/CatsPage';
import CatsSinglePage from '../pages/CatsSinglePage/CatsSinglePage';
import LoaderCatsPage from '../pages/CatsPage/LoaderCatsPage';
import CreateCatPage from '../pages/CreateCatPage/CreateCatPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/login",
                    element: <LoginPage />
                },
                {
                    path: "/signup",
                    element: <SignupPage />
                },
                {
                    path: "/profile",
                    element: <ProfilePage />
                },
                {
                    path: "/cats",
                    element: <CatsPage />,
                    loader: LoaderCatsPage
                },
                {
                    path: "/cats/:id",
                    element: <CatsSinglePage />,
                },
                {
                    path: "/cats/create",
                    element: <CreateCatPage />,
                },
                {
                    path: "*",
                    element: <NotFoundPage />,
                },
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