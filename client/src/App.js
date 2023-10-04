import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminDashBoard from './pages/AdminDashboard'
import "./stylesheets/layout.css";
import "./stylesheets/size.css";
import "./stylesheets/formelements.css"
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-dashboard" element={<AdminDashBoard/>}/>
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
