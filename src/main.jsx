import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import Bookmarks from './Pages/Bookmarks.jsx';
import Blog from './Pages/Blog.jsx';
import Author from './Components/Author.jsx';
import Content from './Components/Content.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),

        
      },
      {
        path:'/blogs/:id',
        element:<Blog></Blog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
             index:true,
             element:<Content></Content>,
             loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)



          },

          
          
          {
          path:'author',
          element:<Author></Author>,
         loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)

        }]
       

      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  </StrictMode>,
)
