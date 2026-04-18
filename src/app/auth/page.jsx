"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const AuthPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    localStorage.setItem("keychecks-authenticated", "true");
    alert("Logging in...");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 bg-background">
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-primary/10">
        {/* Left Side: Login Form */}
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl text-dark mb-2">
              Sign In — KeyChecks
            </h2>
            <p className="text-gray-500 text-sm">
              Access your dashboard and report requests.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/40 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] text-primary font-bold hover:underline"
                >
                  Forgot?
                </button>
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/40 outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] mt-4"
            >
              Sign In
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs text-gray-400 uppercase font-medium absolute">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-sm">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-4 h-4"
                  alt="Google"
                />
                Google
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Marketing Panel */}
        <div className="md:w-1/2 bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white p-2 rounded-lg">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">KeyChecks</span>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              Property decisions with clarity, not guesswork.
            </h1>
            <p className="text-white/85 text-sm md:text-lg">
              Review your reports, track requests, and manage your next property
              move from one secure dashboard.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
            <p className="inline-flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-300" /> Same-day
              report delivery
            </p>
            <p className="inline-flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-300" /> Official UK
              data sources
            </p>
            <p className="inline-flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-300" /> Expert-reviewed
              insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
