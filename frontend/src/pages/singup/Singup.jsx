import React, { useState } from "react";
import { PostSingUp } from "../../Api/Api";
import { Link } from "react-router-dom";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      username: name,
      email,
      password,
    };

    setIsLoading(true);

    await PostSingUp(data);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-5 py-10 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B172DB]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#B172DB]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full max-w-md">

        {/* Card */}
        <div className="bg-white border border-[#B172DB]/20 rounded-3xl shadow-2xl p-8 md:p-10">

          {/* Logo */}
          <div className="text-center">

            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-black to-[#B172DB] flex items-center justify-center shadow-xl">
              <i className="fa-solid fa-user-plus text-white text-3xl"></i>
            </div>

            <h1 className="text-4xl font-bold text-black mt-6">
              Create Account
            </h1>

            <p className="text-gray-500 mt-3">
              Join us and start your shopping journey
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            {/* Name */}
            <div>

              <label className="text-sm font-semibold text-black">
                Full Name
              </label>

              <div className="relative mt-2">

                <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-[#B172DB]"></i>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-14 rounded-2xl border border-gray-200 bg-zinc-50 pl-12 pr-4 outline-none focus:border-[#B172DB] focus:bg-white transition-all"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="text-sm font-semibold text-black">
                Email Address
              </label>

              <div className="relative mt-2">

                <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[#B172DB]"></i>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full h-14 rounded-2xl border border-gray-200 bg-zinc-50 pl-12 pr-4 outline-none focus:border-[#B172DB] focus:bg-white transition-all"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-semibold text-black">
                Password
              </label>

              <div className="relative mt-2">

                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-[#B172DB]"></i>

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                  className="w-full h-14 rounded-2xl border border-gray-200 bg-zinc-50 pl-12 pr-14 outline-none focus:border-[#B172DB] focus:bg-white transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#B172DB]"
                >
                  <i
                    className={`fa-solid ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    }`}
                  ></i>
                </button>

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="text-sm font-semibold text-black">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-[#B172DB]"></i>

                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full h-14 rounded-2xl border border-gray-200 bg-zinc-50 pl-12 pr-14 outline-none focus:border-[#B172DB] focus:bg-white transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#B172DB]"
                >
                  <i
                    className={`fa-solid ${
                      showConfirm ? "fa-eye" : "fa-eye-slash"
                    }`}
                  ></i>
                </button>

              </div>

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-2xl bg-black hover:bg-[#B172DB] text-white font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02]"
            >

              {isLoading ? (
                <span className="flex items-center justify-center gap-3">

                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  Creating Account...

                </span>
              ) : (
                "Create Account"
              )}

            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center">

            <p className="text-gray-500">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 font-semibold text-[#B172DB] hover:text-black transition-colors"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Secure signup with encrypted protection 🔒
        </p>

      </div>

    </section>
  );
}