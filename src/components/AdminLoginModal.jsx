import React, { useState } from 'react';
import { X, Lock, User, Eye, EyeOff, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

const ADMIN_USERNAME = 'nihalray1';
const ADMIN_PASSWORD = 'nihalray9122';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess, darkMode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setUsername('');
        setPassword('');
        onLoginSuccess();
      }, 800);
    } else {
      setErrorMsg('Invalid admin username or password. Access denied.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full max-w-md rounded-2xl border p-6 sm:p-8 space-y-6 ${
        darkMode ? 'bg-slate-900 border-slate-800 text-white shadow-2xl shadow-cyan-500/10' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        {/* Modal Close */}
        <button
          onClick={onClose}
          aria-label="Close Auth Modal"
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold tracking-tight">Admin Authentication</h3>
          <p className="text-xs text-slate-400">
            Restricted portal for Nihal Ray. Enter credentials to unlock.
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success Alert */}
        {isSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
            <span className="text-sm font-bold text-emerald-400 block">Access Granted! Unlocking Admin Panel...</span>
          </div>
        ) : (
          /* Login Form */
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-mono font-semibold text-slate-300">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono font-semibold text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-colors ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all duration-300 mt-2"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
