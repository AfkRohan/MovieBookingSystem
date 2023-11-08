import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminDashBoard from './pages/AdminDashboard'
import AdminLogout from './pages/AdminLogout';
import Helpcenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Tickets from './pages/Tickets';
import "./stylesheets/layout.css";
import "./stylesheets/size.css";
import "./stylesheets/formelements.css"
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import "./stylesheets/tickets.css";

import AdminMovies from './pages/AdminMovies';
import { useSelector } from 'react-redux';
import Show from './pages/AdminShows'
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
        <Route path='/show' element={<Show/>}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tickets/:searchparam" element={<Tickets />} />
        <Route path="/helpcenter" element={<Helpcenter/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
