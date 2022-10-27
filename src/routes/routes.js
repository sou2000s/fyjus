import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CategoryCourses from "../components/Course/CategoryCourses/CategoryCourses";
import Course from "../components/Course/Course";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import FAQ from "../components/FAQ/FAQ";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

import Mainlayout from "../Mainlayout/Mainlayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'/home',
                element:<Home></Home>
                
            },
            
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/course',
                loader: ()=> fetch("https://education-app-server.vercel.app/categories"),
                element:<Course></Course>,
                children: [
                    {
                        path:"course/:id",
                      
                        loader: ({params}) =>{
                            return fetch(`https://education-app-server.vercel.app/category/${params.id}`)
                        }, 
                        element:<CategoryCourses></CategoryCourses>
                    },
                    {
                        path:"/course",
                        loader: () =>{
                            return fetch(`https://education-app-server.vercel.app/category/1`)
                        }, 
                        element:<CategoryCourses></CategoryCourses>
                    },
                ]
            },
            {
                path:"/coursedetails/:id",
                loader: ({params}) => {
                    return fetch(`https://education-app-server.vercel.app/course/${params.id}`)
                },
                element:<CourseDetails></CourseDetails>
            },
            {
                path:"/checkout/:id",
                loader: ({params}) => {
                    return fetch(`https://education-app-server.vercel.app/course/${params.id}`)
                },
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<FAQ/>
            }
        ]
    },
    {
        path:"*",
        element:<p>404 Page not  found</p>
    }
])
export default routes;