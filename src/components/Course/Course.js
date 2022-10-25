import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Course = () => {
    const categoties = useLoaderData()
    return (
        <div className="flex">
              <div className='bg-blue-400 mt-8 flex flex-col h-72 text-white'>
            {
                categoties.map(category =>  <Link to={`course/${category.categoryId}`} className='text-center'>{category.name}</Link>)
            }
               
              </div>
              <div className='ml-20 '>
                <Outlet></Outlet>
              </div>
        </div>
    );
};

export default Course;