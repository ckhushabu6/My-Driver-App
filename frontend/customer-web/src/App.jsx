
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Login from './pages/auth/Login'
import { Routes, Route } from "react-router-dom";
// import Registration from "./pages/Registration";
function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/register" element={<Registration />} /> */}
    </Routes>
     
      <Footer/>
    </>
  )
}

export default App
