import Home from '../pages/Home';
import Login from '../pages/Login';
import Overview from '../pages/Overview';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/overview/:id",
        element: <Overview />,
    }
])

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter;