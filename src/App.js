import './App.css';
import Navbar from './component/navbar/Navbar';
import Dashboard from './component/transactions/Dashboard';
import Login from './component/authentication/Login'
import Singup from './component/authentication/Singup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalState from './context/GlobalState';


function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Singup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
