import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login Page
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            User Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">
            Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="customer">Customer</option>
            <option value="driver">Driver</option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300">
          Login
        </button><p
            onClick={() => navigate('/register')}
            style={{
              marginTop: '1rem',
              color: '#007bff',
              cursor: 'pointer',
              textAlign: 'center',
              textDecoration: 'underline',
            }}
          >
            Don't have an account? Register here
          </p>
      </div>
    </div>
  );
}

export default Login;