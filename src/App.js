


import routes from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';
function App() {
  return (
    <div>
       <RouterProvider router={routes}></RouterProvider>
       <Toaster />
       <ReactTooltip />
    </div>
  );
}

export default App;
