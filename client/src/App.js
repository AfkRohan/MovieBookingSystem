import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminDashBoard from './pages/AdminDashboard';
import PaymentForm from './pages/PaymentForm';
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
import "./stylesheets/movieshow.css";
import "./stylesheets/MovieSeatBooking.css"
import "./stylesheets/paymentform.css";
import "./stylesheets/PaymentSuccess.css";
import AdminMovies from './pages/AdminMovies';
import { useSelector } from 'react-redux';
import Show from './pages/AdminShows'
import MovieDetails from './pages/AdminMovies/MovieDetails';
import Movies from './pages/Movies';
import SeatSelection from './pages/SeatSelection';
import PaymentSuccess from './pages/PaymentForm/PaymentSuccess';
import Payment from './pages/PaymentForm';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
        <Route path="/show" element={<Show/>}/>
        <Route path="/payment" element={<PaymentForm/>}/>
        <Route path="/movie/:id/:moviename" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tickets/:searchparam/:name" element={<Tickets />} />
        <Route path="/helpcenter" element={<Helpcenter/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/seatselection/:id/:moviename/:screenNumber/:price" element={<SeatSelection/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        <Route exact path="/payment" element={Payment} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
