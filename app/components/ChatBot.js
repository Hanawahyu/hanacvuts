'use client';
import { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const initialMessages = [
  {
    id: 1,
    text: "Hello! I'm Hana's assistant. How can I help you today?",
    sender: 'bot',
    time: new Date().toISOString()
  }
];

const commonQuestions = [
  "What services do you offer?",
  "How can I contact you?",
  "Do you have writing samples?",
  "What are your rates?"
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      time: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      let responseText = "";
      
      if (inputValue.toLowerCase().includes('service') || inputValue.toLowerCase().includes('offer')) {
        responseText = "Hana offers SEO content writing, blog/article writing, and social media content creation. You can find more details in the Services section.";
      } else if (inputValue.toLowerCase().includes('contact')) {
        responseText = "You can contact Hana via email at hanawi539@gmail.com or phone at +62 857 9343 2920. The Contact section has all her details.";
      } else if (inputValue.toLowerCase().includes('sample') || inputValue.toLowerCase().includes('portfolio')) {
        responseText = "Yes! Check out the Portfolio section for examples of her work. She has created content for PT Halo Komunikasi, Tampang.com, and Kompasiana.";
      } else if (inputValue.toLowerCase().includes('rate') || inputValue.toLowerCase().includes('price')) {
        responseText = "Rates vary depending on project scope. Please contact Hana directly with your requirements for a customized quote.";
      } else {
        responseText = "Thank you for your message. Hana will get back to you soon. In the meantime, you might find what you need in her portfolio or services sections.";
      }

      const botMessage = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        time: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle btn btn-primary rounded-circle p-3"
        aria-label="Chatbot toggle"
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-container bg-light shadow-lg rounded-3 overflow-hidden d-flex flex-column"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="chatbot-header bg-primary text-white p-3">
              <h3 className="h5 mb-0 d-flex align-items-center gap-2">
                <FaRobot /> Hana's Assistant
              </h3>
            </div>
            
            <div className="chatbot-messages flex-grow-1 p-3 overflow-auto">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-3 d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div 
                    className={`p-3 rounded-4 ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-light-gray'}`}
                    style={{ maxWidth: '80%' }}
                  >
                    <p className="mb-1">{message.text}</p>
                    <small className="text-muted d-block text-end" style={{ fontSize: '0.7rem' }}>
                      {new Date(message.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </small>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-3 d-flex justify-content-start">
                  <div className="p-3 rounded-4 bg-light-gray">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="chatbot-quick-questions p-3 border-top">
              <p className="small text-muted mb-2">Quick questions:</p>
              <div className="d-flex flex-wrap gap-2">
                {commonQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            <form onSubmit={handleSendMessage} className="chatbot-input p-3 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit">
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}