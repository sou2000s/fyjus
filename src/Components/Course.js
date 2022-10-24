import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Course = () => {
    const[ catagories , setCategory] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategory(data))
    } , [])
    return (
        <div>
             <div>
             <h1>This is course</h1>
               {
                 catagories.map(category => <Link style={{marginLeft:"20px"}} to={`course/${category.categoryId}`}>{category.name}</Link>)
               }
              
            
              </div>

               <div>
                <Outlet></Outlet>
               </div>
        </div>
    );
};

export default Course;