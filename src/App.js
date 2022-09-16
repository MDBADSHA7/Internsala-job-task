import './App.css';
import Home from './Componant/Home/Home';
import Footer from './Componant/Shared/Footer/Footer';
import Navbar from './Componant/Shared/Navbar/Navbar';
function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
