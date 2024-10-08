import HomePage from "./routes/homePage/homePage.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/SinglePage/singlePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import Login from "./routes/Login/login.jsx";
import Register from "./routes/Register/Register.jsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
      },
      {
        path:"/list",
        element:<ListPage/>
    },
    {
      path:"/:id",
      element:<SinglePage/>
  },
  {
    path:"/profile",
    element:<ProfilePage/>
},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/register",
  element:<Register/>
}
    ],
    }
  ]);

  return (
   
    <RouterProvider router={router}/>
  )
}

export default App;
