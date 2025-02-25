"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { axiosInstance } from "@/network/axiosInstance";
import { useRouter } from "next/navigation";

const LoginSignup = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin
        ? "https://repaykarobackend.onrender.com/auth/login"
        : "https://repaykarobackend.onrender.com/auth/signup";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const response = await axiosInstance.post(endpoint, payload);
   
      toast.success(response.data.message || (isLogin ? "Login Successful!" : "Signup Successful!"));
      router.push('/dashboard')

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 relative overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login as User" : "Signup as Customer"}
        </h2>

      
        <div className="flex bg-gray-200 rounded-lg p-1 mb-6 relative">
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-green-400 rounded-lg"
            initial={{ x: isLogin ? "0%" : "100%" }}
            animate={{ x: isLogin ? "0%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <button
            className={`flex-1 py-2 rounded-lg font-semibold relative z-10 ${
              isLogin ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-semibold relative z-10 ${
              !isLogin ? "text-white" : "text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <motion.div
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {isLogin && (
              <p className="text-green-400 text-sm cursor-pointer mb-4">
                Forgot password?
              </p>
            )}

            {/* Submit Button with Loader */}
            <button
              type="submit"
              className="w-full bg-green-400 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isLogin ? (
                "Login"
              ) : (
                "Signup"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginSignup;
