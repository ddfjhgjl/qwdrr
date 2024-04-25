import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Addblog from './components/Addblog';
import Viewblog from './components/Viewblog';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/Sign' element={<Signup/>}/>
      <Route path='/add' element={<Main child={<Addblog/>}/>}/>
      <Route path='/view' element={<Main child={<Viewblog/>}/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/profile' element={<Main child={<Myprofile/>}/>}/>  
     </Routes>
    </div>
  );
}

export default App;
