import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Course from './Components/Course';
import Home from './Components/Home';
import Courses from './Components/Courses';
function App() {
  return (
    <BrowserRouter>
             <nav>
              <Link to='/'>Home</Link>
              <Link to='/course'>Course</Link>
             </nav>
            <Routes>
              <Route path='/' element={<Home></Home>} />
              <Route path='/course'  element={<Course></Course>}>
                  <Route path={`course/:id`} element={<Courses></Courses>}></Route>
                  
              </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
