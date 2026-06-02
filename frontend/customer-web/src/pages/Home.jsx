import logo from '../assets/logo_t.png';
import main from '../assets/main.png';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 py-4 bg-gray-100">

      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Right Content Section */}
        <div className="flex flex-col justify-center p-8 md:p-12 text-center md:text-left">

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-20 mb-6 mx-auto md:mx-0"
          />

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            myDriver
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-xl text-blue-700 font-semibold mb-4">
            Hire Professional Drivers Anytime
          </h2>

          {/* Description */}
          <p className="text-slate-500 mb-8 leading-relaxed">
            Safe, Reliable & Professional driver service
            for your daily travel and emergency needs.
          </p>

          {/* Button */}
          <button
            onClick={handleNext}
            className="w-full md:w-[220px] bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-300"
          >
            Next
          </button>
        </div>

        {/* Left Image Section */}
        <div className="h-72 md:h-auto">
          <img
            src={main}
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;