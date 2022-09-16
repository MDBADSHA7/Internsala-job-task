import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componant/Home/Home';
import Login from './Componant/Login/Login';
import Footer from './Componant/Shared/Footer/Footer';
import Navbar from './Componant/Shared/Navbar/Navbar';
import NotFound from './Componant/NotFound/NotFound';
import Appointment from './Componant/Appointment/Appointment';
import Psychologists from './Componant/Psychologist/Psychologists';
function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/psycologist" element={<Psychologists></Psychologists>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
