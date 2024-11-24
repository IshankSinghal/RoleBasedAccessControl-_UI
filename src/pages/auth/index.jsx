import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen w-full bg-zinc-950 overflow-x-hidden lg:w-screen">
      <div className="mx-auto grid min-h-screen w-full md:grid-cols-2 bg-zinc-950 lg:max-w-none">
        {/* Left Panel */}
        <div className="relative hidden flex-col justify-between bg-[#5D4AA8] p-10 md:flex ">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">VRV</div>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to website
            </Link>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center border-spacing-2 "
            style={{
              backgroundImage: "url('./image_01.jpg')",
              opacity: 0.5,
            }}
          />
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-medium text-white">
              Capturing Moments,
              <br />
              Creating Memories
            </h2>
            <div className="flex gap-2">
              <div className="h-1 w-8 rounded-full bg-white/30" />
              <div className="h-1 w-8 rounded-full bg-white/30" />
              <div className="h-1 w-8 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col justify-center items-center bg-gray-700 lg:w-full">
          <div className="flex flex-col justify-center items-center w-[40vw] h-[80vh] border-hidden rounded-lg bg-gray-900 shadow-xl">
            {/* Header Section */}
            <div className="text-center space-y-2 m-5">
              <h1 className="text-4xl font-medium text-white">
                {isLogin ? "Log In to Your Account" : "Create an Account"}
              </h1>
              <p className="text-zinc-400">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <Button
                      onClick={() => setIsLogin(false)}
                      className="text-[#5D4AA8] hover:underline"
                    >
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-[#5D4AA8] hover:underline"
                    >
                      Log In
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Form Section */}
            <div className="space-y-4 m-5 w-full px-10">
              {isLogin ? (
                // Log In Form
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Enter your email or username"
                    className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 rounded-lg"
                  />
                  <div className="space-y-4 ">
                    <div className="relative">
                      {/* Password Input */}
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 pr-12 rounded-lg"
                      />
                      {/* Show/Hide Password Button */}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute inset-y-2 right-2 hover:bg-transparent text-zinc-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Toggle for Admin Login */}
                  <div className="space-y-4 m-1">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="admin-login"
                        aria-label="Login as Admin"
                        className="border-zinc-800 data-[state=checked]:bg-[#5D4AA8] data-[state=checked]:border-[#5D4AA8]"
                        onChange={() => setIsAdmin(!isAdmin)}
                      />
                      <label
                        htmlFor="admin-login"
                        className="text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        Login as Admin
                      </label>
                    </div>

                    {/* Admin Login Fields */}
                    {isAdmin && (
                      <div className="space-y-2">
                        <Input
                          id="admin-key"
                          type="text"
                          placeholder="Enter Admin Key"
                          className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <button className="w-full py-3 bg-[#5D4AA8] hover:bg-[#5D4AA8]/90 text-white font-medium rounded-lg">
                    Log In
                  </button>
                </form>
              ) : (
                // Sign Up Form
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="Full name"
                      className="bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 rounded-lg"
                    />
                    <input
                      placeholder="Username"
                      className="bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 rounded-lg"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 rounded-lg"
                  />
                  <div className="space-y-4 ">
                    <div className="relative">
                      {/* Password Input */}
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 px-4 py-3 pr-12 rounded-lg"
                      />
                      {/* Show/Hide Password Button */}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute inset-y-2 right-2 hover:bg-transparent text-zinc-400"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 m-1">
                    <input
                      type="checkbox"
                      id="terms"
                      className="border-zinc-800 rounded text-[#5D4AA8] focus:ring-0"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      I agree to the{" "}
                      <button className="text-[#5D4AA8] hover:text-[#7D6AC8] underline">
                        Terms & Conditions
                      </button>
                    </label>
                  </div>
                  <button className="w-full py-3 bg-[#5D4AA8] hover:bg-[#5D4AA8]/90 text-white font-medium rounded-lg">
                    Sign Up
                  </button>
                </form>
              )}
            </div>

            {/* Divider */}
            <div className="relative w-full px-10 mt-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-zinc-400">
                  Or register with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <div className="flex justify-center mt-4 w-full px-10">
              <button className="w-full py-3 border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-900/90 rounded-lg flex items-center justify-center space-x-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 4.62c1.13 0 2.09.39 2.83 1.04l2.1-2.1C15.63 2.33 14.07 1.5 12 1.5c-4.3 0-7.98 2.47-9.38 5.93l2.85 2.24c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
