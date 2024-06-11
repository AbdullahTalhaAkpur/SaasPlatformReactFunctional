import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() !== '') {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      const response = await (input);
      const botMessage = { sender: 'bot', text: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setInput('');
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box className="chatbot">
      <List className="message-list">
        {messages.map((message, index) => (
          <ListItem key={index} className={message.sender}>
            <ListItemText primary={message.text} />
          </ListItem>
        ))}
        <div ref={messagesEndRef} />
      </List>
      <Box className="input-box">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Type a message..."
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;
