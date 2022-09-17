import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componant/Home/Home';
import Login from './Componant/Login/Login';
import Footer from './Componant/Shared/Footer/Footer';
import Navbar from './Componant/Shared/Navbar/Navbar';
import NotFound from './Componant/NotFound/NotFound';
import Appointment from './Componant/Appointment/Appointment';
import Psychologists from './Componant/Psychologist/Psychologists';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);
  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };
  return (
    <div data-theme={theme && "my_dark"} className="">
      <Navbar handleThemeChange={handleThemeChange} theme={theme}></Navbar>
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
