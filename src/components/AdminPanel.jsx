import React, { useState, useEffect } from 'react';
import { Mail, Star, Trash2, Eye, Search, ShieldCheck, ArrowLeft, RefreshCw, CheckCircle, Clock, Send, MessageSquare, AlertCircle, Sparkles, Filter } from 'lucide-react';
import { getMessages, updateMessageStatus, deleteMessage, clearAllMessages } from '../utils/messageStore';
import { projects } from '../data/portfolioData';

export default function AdminPanel({ darkMode, onExitAdmin }) {
  const [messages, setMessages] = useState([]);
  const [filterTab, setFilterTab] = useState('all'); // 'all', 'unread', 'starred'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMessageModal, setActiveMessageModal] = useState(null);

  const loadMessages = () => {
    setMessages(getMessages());
  };

  useEffect(() => {
    loadMessages();

    const handleUpdate = () => {
      loadMessages();
    };

    window.addEventListener('portfolio_messages_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('portfolio_messages_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const handleToggleRead = (id, currentReadStatus) => {
    updateMessageStatus(id, { read: !currentReadStatus });
    if (activeMessageModal && activeMessageModal.id === id) {
      setActiveMessageModal((prev) => ({ ...prev, read: !currentReadStatus }));
    }
  };

  const handleToggleStar = (id, currentStarStatus) => {
    updateMessageStatus(id, { starred: !currentStarStatus });
    if (activeMessageModal && activeMessageModal.id === id) {
      setActiveMessageModal((prev) => ({ ...prev, starred: !currentStarStatus }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMessage(id);
      if (activeMessageModal && activeMessageModal.id === id) {
        setActiveMessageModal(null);
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear ALL inbox messages?')) {
      clearAllMessages();
    }
  };

  const handleOpenMessage = (msg) => {
    if (!msg.read) {
      updateMessageStatus(msg.id, { read: true });
    }
    setActiveMessageModal({ ...msg, read: true });
  };

  // Filter & Search Logic
  const filteredMessages = messages.filter((msg) => {
    if (filterTab === 'unread' && msg.read) return false;
    if (filterTab === 'starred' && !msg.starred) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = msg.name?.toLowerCase().includes(q);
      const matchEmail = msg.email?.toLowerCase().includes(q);
      const matchSubject = msg.subject?.toLowerCase().includes(q);
      const matchContent = msg.message?.toLowerCase().includes(q);
      return matchName || matchEmail || matchSubject || matchContent;
    }
    return true;
  });

  const unreadCount = messages.filter((m) => !m.read).length;
  const starredCount = messages.filter((m) => m.starred).length;

  return (
    <div className={`min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-20 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header Bar */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        } flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}>
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CONNECTED ADMIN PANEL</span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Message Center & Admin Dashboard
            </h1>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Managing incoming inquiries sent from the Nihal Ray personal portfolio website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExitAdmin}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-2 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit to Site</span>
            </button>

            <button
              onClick={onExitAdmin}
              className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-2 transition-all"
            >
              <span>Lock / Log Out</span>
            </button>
          </div>


        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Total Messages</span>
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold mt-2 text-cyan-400">{messages.length}</div>
            <span className="text-xs text-slate-500 mt-1 block">Received from contact form</span>
          </div>

          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Unread Messages</span>
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold mt-2 text-amber-400">{unreadCount}</div>
            <span className="text-xs text-slate-500 mt-1 block">Requires admin response</span>
          </div>

          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Starred / Priority</span>
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Star className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold mt-2 text-purple-400">{starredCount}</div>
            <span className="text-xs text-slate-500 mt-1 block">Flagged for follow-up</span>
          </div>

          <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase">Portfolio Projects</span>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold mt-2 text-emerald-400">{projects.length}</div>
            <span className="text-xs text-slate-500 mt-1 block">Active project showcases</span>
          </div>

        </div>

        {/* Main Inbox Panel */}
        <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
          darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  filterTab === 'all'
                    ? 'bg-cyan-500 text-white shadow-md'
                    : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                All ({messages.length})
              </button>
              <button
                onClick={() => setFilterTab('unread')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  filterTab === 'unread'
                    ? 'bg-amber-500 text-white shadow-md'
                    : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={() => setFilterTab('starred')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                  filterTab === 'starred'
                    ? 'bg-purple-500 text-white shadow-md'
                    : darkMode ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                Starred ({starredCount})
              </button>
            </div>

            {/* Search Box & Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-cyan-500 ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <button
                onClick={loadMessages}
                title="Refresh Messages"
                className={`p-2 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              {messages.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="px-3 py-2 rounded-xl text-xs font-mono text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Inbox</span>
                </button>
              )}
            </div>

          </div>

          {/* Messages Table / List */}
          {filteredMessages.length === 0 ? (
            <div className="p-12 text-center space-y-3 border-2 border-dashed border-slate-800 rounded-2xl">
              <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold">No Messages Found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No messages match the current filter or search criteria. Send a message from the Contact section of the portfolio to test live sync!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => handleOpenMessage(msg)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    !msg.read
                      ? darkMode
                        ? 'bg-slate-950/80 border-cyan-500/40 shadow-md shadow-cyan-500/5'
                        : 'bg-blue-50/80 border-blue-200 shadow-sm'
                      : darkMode
                      ? 'bg-slate-950/30 border-slate-800/80 hover:border-slate-700'
                      : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  
                  {/* Left Info */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleStar(msg.id, msg.starred);
                      }}
                      className="mt-1 text-slate-500 hover:text-amber-400 transition-colors"
                    >
                      <Star className={`w-4 h-4 ${msg.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        {!msg.read && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                        )}
                        <h4 className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {msg.name}
                        </h4>
                        <span className="text-xs font-mono text-slate-400 truncate">
                          &lt;{msg.email}&gt;
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-cyan-400 truncate">
                        Subject: {msg.subject}
                      </div>

                      <p className={`text-xs truncate ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {msg.message}
                      </p>
                    </div>
                  </div>

                  {/* Right Action Controls */}
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[11px] font-mono text-slate-500">
                      {msg.date}
                    </span>

                    <button
                      onClick={() => handleToggleRead(msg.id, msg.read)}
                      title={msg.read ? 'Mark as Unread' : 'Mark as Read'}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                    >
                      <CheckCircle className={`w-4 h-4 ${msg.read ? 'text-emerald-400' : ''}`} />
                    </button>

                    <button
                      onClick={() => handleDelete(msg.id)}
                      title="Delete Message"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Detailed Message Modal View */}
      {activeMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 space-y-6 ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold block">Message Detail</span>
                <h3 className="text-xl font-bold mt-0.5">{activeMessageModal.subject}</h3>
                <span className="text-xs font-mono text-slate-400">Received {activeMessageModal.date}</span>
              </div>
              <button
                onClick={() => setActiveMessageModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
              <div><strong className="text-cyan-400">From:</strong> {activeMessageModal.name} &lt;{activeMessageModal.email}&gt;</div>
              <div><strong className="text-purple-400">Recipient:</strong> Nihal Ray (nihalray03@gmail.com)</div>
              <div><strong className="text-amber-400">Timestamp:</strong> {activeMessageModal.timestamp}</div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-mono uppercase text-slate-400 font-semibold">Message Content:</h5>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
                {activeMessageModal.message}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleStar(activeMessageModal.id, activeMessageModal.starred)}
                  className={`p-2 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 ${
                    activeMessageModal.starred ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Star className="w-3.5 h-3.5" />
                  <span>{activeMessageModal.starred ? 'Starred' : 'Star'}</span>
                </button>

                <button
                  onClick={() => handleDelete(activeMessageModal.id)}
                  className="p-2 rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete</span>
                </button>
              </div>

              <a
                href={`mailto:${activeMessageModal.email}?subject=Re: ${encodeURIComponent(activeMessageModal.subject)}`}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Reply via Mail</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
