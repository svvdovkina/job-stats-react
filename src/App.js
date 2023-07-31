import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Stats, Profile, AllJobs, AddJob, SharedLayout} from "./pages/dashboard";
import ErrorPage from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout/>,
    children: [
      {
        index: true,
        element: <Stats/>
      },
      {
        path: 'all-jobs',
        element: <AllJobs/>
      },
      {
        path: 'add-job',
        element: <AddJob/>
      },
      {
        path: 'profile',
        element: <Profile/>
      },
      
    ]
  },
  {
    path: '/landing',
    element: <Landing/>
  },
  {
    path: '/login',
    element: <Register/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
