"use client";
import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, ShieldCheck, Home } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // এখানে আপনার Authentication লজিক (Firebase/Auth.js) বসবে
    alert(isLogin ? "Logging in..." : "Creating account...");
    // সফল হলে রিপোর্ট এপ্লাই পেজে রিডাইরেক্ট করবেন
    // window.location.href = "/apply-report";
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 font-sans">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        {/* Left Side: Branding/Info */}
        <div className="md:w-1/2 bg-purple-600 p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <ShieldCheck className="text-purple-600" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                PropertyGuard
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              {isLogin
                ? "Welcome back to your property portal."
                : "Start your expert property journey today."}
            </h1>
            <p className="text-purple-100 text-sm md:text-lg opacity-90">
              Get detailed insights on crime, schools, and legal reviews for
              your future home.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-purple-500/50">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-purple-400 border-2 border-purple-600 flex items-center justify-center text-[10px]"
                  >
                    User
                  </div>
                ))}
              </div>
              <p className="text-purple-100 text-xs md:text-sm lg:text-base">
                Joined by 2,000+ smart homebuyers
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-purple-600 font-bold hover:underline"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@email.com"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    className="text-[10px] text-purple-600 font-bold hover:underline"
                  >
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 shadow-lg shadow-purple-100 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] mt-4"
            >
              {isLogin ? "Login Now" : "Register Now"}
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Optional: Social Login */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs text-gray-400 uppercase font-medium absolute">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-4 h-4"
                  alt="G"
                />{" "}
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  className="w-4 h-4"
                  alt="L"
                />{" "}
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
