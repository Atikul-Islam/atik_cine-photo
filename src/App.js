import { Toaster } from "react-hot-toast";
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {


  return (
    <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router}></RouterProvider>
     { <Toaster
        position="top-center"
        reverseOrder={false}
      /> }
    </div>
  );
}

export default App;
