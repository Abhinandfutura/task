
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import NavBar1 from './Components/Navbar/NavBar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Components/Projects/Project';
function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <NavBar1/>
   <Sidebar/>
   <Routes>
<Route path='/' element={<Project/>}/>

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
