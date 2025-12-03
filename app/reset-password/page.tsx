"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    
    // TODO: Implement actual password reset with token
    setIsReset(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isReset) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-blue-600">Password</span> <span className="text-yellow-400">Reset!</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Your password has been successfully reset. You can now sign in with your new password.
            </p>
            <Link
              href="/signin"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Sign In Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-blue-600">Reset</span> <span className="text-yellow-400">Password</span>
            </h1>
            <p className="text-gray-600">Enter your new password below</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter new password"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Confirm new password"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Password must contain:</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <span className={formData.password.length >= 8 ? "text-green-600" : "text-gray-400"}>✓</span>
                  At least 8 characters
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[A-Z]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>✓</span>
                  One uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[a-z]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>✓</span>
                  One lowercase letter
                </li>
                <li className="flex items-center gap-2">
                  <span className={/[0-9]/.test(formData.password) ? "text-green-600" : "text-gray-400"}>✓</span>
                  One number
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Sign In */}
          <div className="mt-6 text-center">
            <Link href="/signin" className="text-gray-600 hover:text-gray-700 font-semibold">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
