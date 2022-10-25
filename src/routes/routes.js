import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../components/CheckOut/CheckOut";
import CategoryCourses from "../components/Course/CategoryCourses/CategoryCourses";
import Course from "../components/Course/Course";
import CourseDetails from "../components/CourseDetails/CourseDetails";

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
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:'/course',
                loader: ()=> fetch("http://localhost:5000/categories"),
                element:<Course></Course>,
                children: [
                    {
                        path:"course/:id",
                      
                        loader: ({params}) =>{
                            return fetch(`http://localhost:5000/category/${params.id}`)
                        }, 
                        element:<CategoryCourses></CategoryCourses>
                    },
                    {
                        path:"/course",
                        loader: () =>{
                            return fetch(`http://localhost:5000/category/1`)
                        }, 
                        element:<CategoryCourses></CategoryCourses>
                    },
                ]
            },
            {
                path:"/coursedetails/:id",
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element:<CourseDetails></CourseDetails>
            },
            {
                path:"/checkout/:id",
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/course/${params.id}`)
                },
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])
export default routes;