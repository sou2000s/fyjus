import { useEffect } from "react";
import { useState } from "react";


const Courses = () => {
  const [courses , setCourses] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/category/2`)
    .then(res => res.json())
    .then(data => setCourses(data))
  } , [])
  console.log(courses);
    return (
        <div>
             {courses.map(course => <p>{course.name}</p>)}
        </div>
    );
};

export default Courses; 