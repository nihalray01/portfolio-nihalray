const STORAGE_KEY = 'nihal_portfolio_messages';

const INITIAL_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@techrecruiter.io',
    subject: 'AI/ML Internship Opportunity at TechVision',
    message: 'Hi Nihal, I stumbled upon your RAG Document Assistant project and was really impressed with your implementation of FAISS and Gemini LLM. We are looking for an AI Engineering Intern for Summer 2026. Would love to connect!',
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    date: 'Today, 1:15 PM',
    read: false,
    starred: true,
  },
  {
    id: 'msg-2',
    name: 'Dr. A. K. Sharma',
    email: 'aksharma@uttaranchaluniversity.ac.in',
    subject: 'Research Collaboration on Computer Vision',
    message: 'Dear Nihal, Great work on your Live Hand Gesture Control application. The computer vision team at Uttaranchal University is interested in reviewing your approach for our upcoming conference paper.',
    timestamp: new Date(Date.now() - 3600000 * 26).toISOString(),
    date: 'Yesterday, 11:30 AM',
    read: true,
    starred: false,
  },
  {
    id: 'msg-3',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@devstudio.com',
    subject: 'Open Source AI Integration Inquiry',
    message: 'Hey Nihal! I checked your Email Spam Detection repo on GitHub. We are working on a similar NLP classifier and wanted to ask about your hyperparameter tuning steps.',
    timestamp: new Date(Date.now() - 3600000 * 50).toISOString(),
    date: '2 days ago',
    read: true,
    starred: false,
  }
];

export function getMessages() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MESSAGES));
      return INITIAL_MESSAGES;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading messages:', err);
    return INITIAL_MESSAGES;
  }
}

export function saveNewMessage(msgData) {
  try {
    const existing = getMessages();
    const newMsg = {
      id: `msg-${Date.now()}`,
      name: msgData.name,
      email: msgData.email,
      subject: msgData.subject || 'General Portfolio Inquiry',
      message: msgData.message,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + new Date().toLocaleDateString(),
      read: false,
      starred: false,
    };
    const updated = [newMsg, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('portfolio_messages_updated'));
    return newMsg;
  } catch (err) {
    console.error('Error saving new message:', err);
  }
}

export function updateMessageStatus(id, updates) {
  try {
    const existing = getMessages();
    const updated = existing.map((m) => (m.id === id ? { ...m, ...updates } : m));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('portfolio_messages_updated'));
    return updated;
  } catch (err) {
    console.error('Error updating message status:', err);
  }
}

export function deleteMessage(id) {
  try {
    const existing = getMessages();
    const updated = existing.filter((m) => m.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('portfolio_messages_updated'));
    return updated;
  } catch (err) {
    console.error('Error deleting message:', err);
  }
}

export function clearAllMessages() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event('portfolio_messages_updated'));
}
