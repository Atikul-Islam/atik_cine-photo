import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import ClientReviews from "../../Pages/Home/Services/ClientReviews/ClientReviews";
import UpdateClientReview from "../../Pages/Home/Services/ClientReviews/UpdateClientReview";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://assignment11-node-mongodb-server.vercel.app')
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('https://assignment11-node-mongodb-server.vercel.app/services')
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`https://assignment11-node-mongodb-server.vercel.app/services/${params.id}`),
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/clientreviews',
          element: <PrivateRoutes><ClientReviews></ClientReviews></PrivateRoutes>
        },
        {
          path: '/updatereview/:id',
          element: <UpdateClientReview></UpdateClientReview>
        },
        {
          path: '/addservice',
          element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
          loader: () => fetch('https://assignment11-node-mongodb-server.vercel.app/services')
        }
      ]
    }
  ])

export default router;