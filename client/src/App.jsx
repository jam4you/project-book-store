import Signup from "./components/Signup";
import { Routes, Route } from 'react-router-dom';

//import App.css
import './App.css';
import Login from "./components/Login";
import Products from "./components/Products/Products";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
  )
}

export default App