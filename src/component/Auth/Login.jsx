import React from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [focusedField, setFocusedField] = React.useState(null);
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      handleLogin(email, password);
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-slate-950 overflow-hidden px-4">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-violet-600/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-emerald-600/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
      </div>

      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-30"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animation: `float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            animationDirection: i % 2 === 0 ? "normal" : "reverse",
          }}
        />
      ))}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md transform transition-all duration-700">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

        {/* Glass Card */}
        <div className="relative backdrop-blur-2xl bg-slate-900/40 border border-slate-700/50 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:border-slate-600/50 hover:shadow-blue-500/10">
          <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 rounded-2xl -z-10" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-lg border border-slate-600/50 transition-all duration-300 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Shield className="w-8 h-8 text-slate-300 relative z-10 transition-colors duration-300 group-hover:text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-slate-400 font-medium">Sign in to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="relative group">
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl blur-sm transition-all duration-300 ${focusedField === "email" ? "opacity-100 scale-105" : "opacity-0"}`} />
                <div className="relative flex items-center">
                  <div className="absolute left-4 z-10">
                    <Mail className={`w-5 h-5 transition-all duration-300 ${focusedField === "email" ? "text-blue-400 scale-110" : "text-slate-500"}`} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl placeholder-slate-500 text-white transition-all duration-300 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70"
                    required
                  />
                </div>
                
                
              </div>
            </div>
      
            {/* Password */}
            <div className="relative group">
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl blur-sm transition-all duration-300 ${focusedField === "password" ? "opacity-100 scale-105" : "opacity-0"}`} />
                <div className="relative flex items-center">
                  <div className="absolute left-4 z-10">
                    <Lock className={`w-5 h-5 transition-all duration-300 ${focusedField === "password" ? "text-blue-400 scale-110" : "text-slate-500"}`} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl placeholder-slate-500 text-white transition-all duration-300 focus:outline-none focus:border-blue-400/50 focus:bg-slate-800/70"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 z-10"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            
            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <div className="relative z-10 flex items-center justify-center space-x-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </button>
          </form>

          
          {/* Corner Glow */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-violet-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Custom Styles */}
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(15px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Login;
