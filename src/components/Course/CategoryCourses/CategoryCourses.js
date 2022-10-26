import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const CategoryCourses = () => {
    const courses = useLoaderData(); 
    console.log(courses);
    return (
        <div className='grid md:grid-cols-4 gap-7 mt-9'>
              {
                courses.map(course => <Card course={course}></Card>)
              }
        </div>
    );
};

export default CategoryCourses;