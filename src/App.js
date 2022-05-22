import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Pages/Login/Signup';
import PrivetRoute from './Pages/Login/PrivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import PrivetAdmin from './Pages/Login/PrivetAdmin';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <PrivetRoute>
            <Appointment></Appointment>
          </PrivetRoute>
        }></Route>
        <Route path='/dashboard' element={
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='myhistory' element={<MyHistory></MyHistory>}></Route>
          <Route path='allusers' element={<PrivetAdmin><AllUsers></AllUsers></PrivetAdmin>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>

    </div>
  );
}

export default App;
