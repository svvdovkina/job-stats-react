import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";


const router = createBrowserRouter([
  {
    path: '/landing',
    element: <Landing/>
  },
  {
    path: '/login',
    element: <Register/>
  },
  {
    path: '/',
    element: <Dashboard/>
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
