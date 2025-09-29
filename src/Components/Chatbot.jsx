/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { sendMessageToOpenAI, getFallbackResponse } from "../utils/openai";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you with your tech needs today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    try {
      // Try OpenAI API first
      let botResponseText;
      try {
        botResponseText = await sendMessageToOpenAI(currentInput, messages);
      } catch (openaiError) {
        console.warn("OpenAI API failed, using fallback:", openaiError.message);
        // Use fallback response if OpenAI fails
        botResponseText = getFallbackResponse(currentInput);
      }

      const botResponse = {
        id: Date.now() + 1,
        text: botResponseText,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const clearConversation = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm your AI assistant. How can I help you with your tech needs today?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
    setInputMessage("");
    setIsLoading(false);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="right-7 bottom-6 z-50 fixed"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={toggleChat}
          className="flex justify-center items-center bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-500 hover:to-blue-600 shadow-lg hover:shadow-blue-500/30 rounded-full w-14 h-14 text-white hover:scale-110 transition-all duration-300 transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="robot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaRobot className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="right-6 bottom-4 z-40 fixed w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-white shadow-2xl border border-gray-200 rounded-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className="flex justify-center items-center bg-white/20 rounded-full w-10 h-10">
                    <FaRobot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">AI Assistant</h3>
                    <p className="text-blue-100 text-xs">
                      Online • Ready to help
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearConversation}
                    className="hover:bg-white/20 p-1 rounded-full transition-colors"
                    title="Clear conversation"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleMinimize}
                    className="hover:bg-white/20 p-1 rounded-full transition-colors"
                    title={isMinimized ? "Expand" : "Minimize"}
                  >
                    {isMinimized ? (
                      <FaPlus className="w-4 h-4" />
                    ) : (
                      <FaMinus className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={toggleChat}
                    className="hover:bg-white/20 p-1 rounded-full transition-colors"
                    title="Close chat"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="z-0 relative space-y-4 bg-gray-50 p-4 h-80 overflow-y-auto">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex relative z-0 ${
                          message.isBot ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`flex items-end space-x-2 max-w-xs ${
                            message.isBot
                              ? "flex-row"
                              : "flex-row-reverse space-x-reverse"
                          }`}
                        >
                          <div
                            className={`flex justify-center items-center rounded-full w-8 h-8 flex-shrink-0 ${
                              message.isBot
                                ? "bg-blue-500 text-white"
                                : "bg-gray-500 text-white"
                            }`}
                          >
                            {message.isBot ? (
                              <FaRobot className="w-4 h-4" />
                            ) : (
                              <FaUser className="w-4 h-4" />
                            )}
                          </div>
                          <div className="relative">
                            <div
                              className={`px-4 py-2 rounded-2xl ${
                                message.isBot
                                  ? "bg-white text-gray-800 border border-gray-200"
                                  : "bg-blue-500 text-white"
                              }`}
                            >
                              <p className="text-sm">{message.text}</p>
                            </div>
                            <p
                              className={`text-xs text-gray-500 mt-1 relative z-0 ${
                                message.isBot ? "text-left" : "text-right"
                              }`}
                            >
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                      <div className="z-0 relative flex justify-start">
                        <div className="flex items-end space-x-2 max-w-xs">
                          <div className="flex justify-center items-center bg-blue-500 rounded-full w-8 h-8 text-white">
                            <FaRobot className="w-4 h-4" />
                          </div>
                          <div className="bg-white px-4 py-2 border border-gray-200 rounded-2xl">
                            <div className="flex space-x-1">
                              <div className="bg-gray-400 rounded-full w-2 h-2 animate-bounce"></div>
                              <div
                                className="bg-gray-400 rounded-full w-2 h-2 animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="bg-gray-400 rounded-full w-2 h-2 animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input */}
                  <div className="z-20 relative bg-white shadow-lg p-4 border-gray-200 border-t text-black">
                    <div className="flex items-end space-x-2">
                      <textarea
                        ref={inputRef}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 focus:border-black rounded-full focus:outline-none max-h-20 text-sm resize-none"
                        rows="1"
                        disabled={isLoading}
                      />
                      <button
                        onClick={sendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="z-30 relative flex flex-shrink-0 justify-center items-center bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 rounded-full w-10 h-10 text-white transition-colors disabled:cursor-not-allowed"
                      >
                        <FaPaperPlane className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
