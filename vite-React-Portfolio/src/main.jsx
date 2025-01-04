import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Placeholder from './pages/Placeholder';
import ErrorPage from './pages/ErrorPage';

// import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/placeholder',
                element: <Placeholder />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);