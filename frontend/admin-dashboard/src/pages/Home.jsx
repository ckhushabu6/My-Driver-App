import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to our online store!</h1>
      <p>Discover a wide range of products and enjoy a seamless shopping experience.</p>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button>Register</button>
    </div>
  );
}   
export default Home;
