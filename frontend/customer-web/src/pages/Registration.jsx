function Registration() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex justify-center items-center">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[400px]">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Role */}
          <select
            name="role"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="customer">Customer</option>
            <option value="driver">Driver</option>
          </select>

          {/* Password */}
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}

export default Registration;