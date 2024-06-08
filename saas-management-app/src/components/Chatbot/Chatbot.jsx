import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import './chatbot.css';

const Chatbot = ({ getResponse }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() !== '') {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      const response = await getResponse(input);
      const botMessage = { sender: 'bot', text: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setInput('');
    }
  };

  return (
    <Box className="chatbot">
      <List className="message-list">
        {messages.map((message, index) => (
          <ListItem key={index} className={message.sender}>
            <ListItemText primary={message.text} />
          </ListItem>
        ))}
      </List>
      <Box className="input-box">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Ask something about plant"
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;