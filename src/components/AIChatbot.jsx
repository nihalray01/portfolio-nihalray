import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Trash2, User, MessageSquare, Terminal } from 'lucide-react';
import { generateAIResponse, QUICK_PROMPTS } from '../utils/aiAssistant';

export default function AIChatbot({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hi! I'm Nihal Ray's Portfolio Assistant.\n\nAsk me any question about Nihal's skills, B.Tech CSE (AI & ML) degree at Uttaranchal University, projects, or contact details!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateAIResponse(text);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: `Hi! I'm Nihal Ray's Portfolio Assistant.\n\nAsk me any question about Nihal's skills, B.Tech CSE (AI & ML) degree at Uttaranchal University, projects, or contact details!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Assistant"
            className="px-4 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20 hover:scale-105 transition-all duration-200 flex items-center gap-2.5 font-semibold text-xs border border-sky-400/40"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="font-mono">Portfolio Q&A</span>
          </button>
        )}
      </div>

      {/* Floating Chat Window Drawer */}
      {isOpen && (
        <div className={`fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[85vh] rounded-2xl border shadow-2xl flex flex-col overflow-hidden animate-fadeIn ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white shadow-black/60' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          
          {/* Header */}
          <div className="px-4 py-3 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs flex items-center gap-1.5 text-white">
                  <span>Portfolio Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Ask about skills, projects & background</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Clear Chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Window"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-800 text-sky-400 border border-slate-700'
                }`}>
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className={`max-w-[80%] rounded-xl p-3 space-y-1 ${
                  msg.sender === 'user'
                    ? 'bg-sky-500 text-white rounded-tr-none'
                    : darkMode
                    ? 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                    : 'bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[9px] font-mono block text-right opacity-60`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5 text-sky-400 animate-spin" />
                <span>Searching portfolio knowledge...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 border-t border-slate-800/60 bg-slate-950 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.slice(0, 3).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded text-[10px] font-mono whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-sky-300 border border-slate-800 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-slate-800 bg-slate-950 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-sky-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sky-400 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
