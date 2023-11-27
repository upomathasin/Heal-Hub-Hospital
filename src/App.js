import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";
import Services from "./Services/Services";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import About from "./About/About";
import AllServices from "./AllServices/AllServices";
import UserPrivateRoute from "./UserPrivateRoute/UserPrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },

        { path: "/login", element: <Login></Login> },
        { path: "/services", element: <Services></Services> },
        {
          path: "/allservices",
          element: (
            <UserPrivateRoute>
              <AllServices></AllServices>
            </UserPrivateRoute>
          ),
        },
        { path: "/service/:id", element: <ServiceDetails></ServiceDetails> },
        { path: "/register", element: <Registration></Registration> },
        { path: "/about", element: <About></About> },
        { path: "*", element: <NotFoundPage></NotFoundPage> },
      ],
    },
  ]);
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
