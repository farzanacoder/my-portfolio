import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Orebi from './pages/Orebi';
import RootLayout from './layouts/RootLayout';
import Lunchipiration from './pages/Lunchipiration';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
   <Route path="/" element={<RootLayout />}>
     <Route path="/" element={<Home />}></Route>
    <Route path="/orebi" element={<Orebi />}></Route>
    <Route path="/lunchipiration" element={<Lunchipiration />}></Route>
   </Route>
   </>
  )
);



const App = () => {
  return (
    <div>
         <RouterProvider router={router} />

    </div>
  )
}

export default App