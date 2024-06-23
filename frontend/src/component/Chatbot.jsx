import React, { useState } from 'react';
import Draggable from 'react-draggable';
import chatbotImage from '../assets/chatbot.png';

// ChatBox component
const ChatBox = ({ isVisible }) => {
  const [messages, setMessages] = useState([]); // State for messages
  const [input, setInput] = useState(''); // State for input text

  // Function to handle sending messages
  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    // Simulate AI response
    const aiResponse = await getAIResponse(input);
    const aiMessage = { text: aiResponse, sender: 'ai' };
    setMessages([...messages, userMessage, aiMessage]);

    // Clear input field
    setInput('');
  };

  // Function to simulate AI response with a delay
  const getAIResponse = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`AI response to: ${message}`);
      }, 1000);
    });
  };

  // If the chatbox is not visible, return null
  if (!isVisible) return null;

  return (
    <Draggable>
      <div className="fixed bottom-20 right-4 w-80 bg-black border rounded-lg shadow-lg" style={{ zIndex: 1000 }}>
        <div className="p-4">
          <div className="overflow-y-auto h-64 mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 rounded-lg max-w-xs message ${msg.sender === 'user' ? 'bg-blue-900 self-end' : 'bg-gray-700 self-start'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              className="flex-grow p-2 border rounded text-black" // Changed the text color to black
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

// ChatbotIcon component
const ChatbotIcon = ({ toggleChat }) => {
  return (
    <Draggable>
      <div
        className="fixed bottom-4 right-4 cursor-pointer shadow-lg"
        onClick={toggleChat}
        style={{ zIndex: 1000 }}
      >
        <img
          src={chatbotImage}
          alt="Chatbot Icon"
          className="w-16 h-16 rounded-full"
        />
      </div>
    </Draggable>
  );
};

// Chatbot component
const Chatbot = () => {
  const [isChatVisible, setChatVisible] = useState(false); // State to manage chat visibility

  // Function to toggle chat visibility
  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  return (
    <>
      <ChatBox isVisible={isChatVisible} />
      <ChatbotIcon toggleChat={toggleChat} />
    </>
  );
};

// Export the Chatbot component as default
export default Chatbot;
