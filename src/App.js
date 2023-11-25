import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";
import Services from "./Services/Services";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/services", element: <Services></Services> },
        { path: "/service/:id", element: <ServiceDetails></ServiceDetails> },
        { path: "/register", element: <Registration></Registration> },
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
