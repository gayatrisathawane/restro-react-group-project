import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
// import Card from './component/Card/Card';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
=======
import Home from './view/Home/Home';
import Products from './view/Products/Products'
import Contact from './view/Contact/Contact';
import About from './view/About/About'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import FastFood from './view/Products/FastFood/FastFood';
import Vegeterian from './view/Products/Vegeterian/Vegeterian';
// import South from './view/Products/South/South';
import Nonveg from './view/Products/Nonveg/Nonveg'
>>>>>>> 1878cb4a052c405adbd320ee5ccd728d7dbaf432

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/products",
    element:<Products/>,
  },
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    path: "/fastfood",
    element:<FastFood/>,
  },
  {
    path: "/fastfood/nonveg",
    element:<Nonveg/>,
  },
  // {
  //   path: "/south",
  //   element:<South/>,
  // },
  {
    path: "/vegeterian",
    element:<Vegeterian/>,
  },
  // {
  //   path: "/login",
  //   element:Login,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<<<<<<< HEAD
   {/* <Card/> */}
   
{/* <RouterProvider router={router} /> */}
=======
  
<RouterProvider router={router} />

>>>>>>> 1878cb4a052c405adbd320ee5ccd728d7dbaf432
  </>
);

