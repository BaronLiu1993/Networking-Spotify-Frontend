"use client";

import { useState } from "react";
import Footer from "../components/home/footer";
import { Input } from "@/shadcomponents/ui/input";
import { SendLogin } from "../actions/login";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (email, password) => {
    const userId = await SendLogin(email, password);
    window.location.href = `http://localhost:3000/qr/${encodeURIComponent(
      userId
    )}`;
  };

  return (
    <>
      <div className="bg-gray-100 font-lexend min-h-screen flex flex-col">
        <main className="flex-grow flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">Login</h1>

            <div className="space-y-4">
              <div>
                <label className="text-sm block mb-1">Email</label>
                <Input
                  className="w-full bg-white"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Password</label>
                <Input
                  type="password"
                  className="w-full bg-white"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              By clicking Login, you agree to the{" "}
              <span className="text-blue-500 underline">Terms of Service</span>{" "}
              and{" "}
              <span className="text-blue-500 underline">Privacy Policy</span>.
            </p>

            <button
              onClick={() => handleLogin(formData.email, formData.password)}
              className="text-xs sm:text-sm rounded-xs px-4 py-2 bg-white cursor-pointer text-[#004875] border-2 border-[#004875] hover:text-white hover:bg-[#004875] transition"
            >
              Login
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
