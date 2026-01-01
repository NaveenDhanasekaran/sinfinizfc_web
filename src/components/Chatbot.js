import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const faqs = [
    {
      keywords: ['product', 'textile', 'fabric', 'what do you sell'],
      answer: 'We export premium cotton and synthetic textiles including bed sheets, towels, and ladies garments. Visit our Products page to see our full catalog.'
    },
    {
      keywords: ['price', 'cost', 'quote', 'quotation'],
      answer: 'For pricing and quotations, please contact us through our Contact page with your specific requirements.'
    },
    {
      keywords: ['shipping', 'delivery', 'export'],
      answer: 'We provide worldwide shipping from Sharjah, UAE. Delivery times vary by destination. Contact us for specific shipping information.'
    },
    {
      keywords: ['quality', 'certification'],
      answer: 'All our products meet international quality standards. We ensure rigorous quality control for every shipment.'
    },
    {
      keywords: ['minimum', 'moq', 'order quantity'],
      answer: 'Minimum order quantities vary by product. Please contact us with your requirements for specific MOQ information.'
    },
    {
      keywords: ['contact', 'reach', 'email', 'phone'],
      answer: 'You can reach us through our Contact page. We are based in Sharjah, UAE and respond to all inquiries promptly.'
    }
  ];

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = inputValue.toLowerCase();
    let botResponse = 'Thank you for your message. For specific inquiries, please contact us through our contact form or email us at info@sinfinimarketing.com';

    for (const faq of faqs) {
      if (faq.keywords.some(keyword => lowerInput.includes(keyword))) {
        botResponse = faq.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div id="chatbot" className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbot}
        className="bg-gold-500 hover:bg-gold-600 text-white rounded-full p-4 shadow-lg transition-colors"
      >
        <i className="fas fa-comments text-xl"></i>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border">
          <div className="bg-navy-800 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button onClick={toggleChatbot} className="text-white hover:text-gray-300">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div id="chat-messages" className="p-4 h-64 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 chat-message ${msg.type}`}>
                <div className="message">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                onClick={sendMessage}
                className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
