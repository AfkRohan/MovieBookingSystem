import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminDashBoard from './pages/AdminDashboard'
import AdminLogout from './pages/AdminLogout';
import "./stylesheets/layout.css";
import "./stylesheets/size.css";
import "./stylesheets/formelements.css"
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import AdminMovies from './pages/AdminMovies';
import Shows from './pages/AdminShows';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from './pages/AdminMovies/MovieDetails';
import Movies from './pages/Movies';


function App() {
  const {loading} = useSelector((state) => state.loaders);
  return (
    
    <div>
      {loading && <div className='loader-parent'>
      <div className='loader'></div>
      </div>}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/admin-logout" element={<AdminLogout/>}/>
        <Route path="/admin-dashboard" element={<AdminDashBoard/>}/>
        <Route path="/admin-movie" element={<AdminMovies/>}/>
        <Route path="/show" element={<Shows/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
