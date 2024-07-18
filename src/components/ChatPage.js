import React, { useEffect, useState, useRef } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:5000');

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState('');
  const lastMessageRef = useRef(null);
  const [userName, setUserName] = useState('vijeshkunnummal');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on('typingResponse', (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    if(!users.includes(userName)) {
      socket.emit('newUser', { userName, socketID: socket.id });
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  useEffect(() => {    
    socket.on('newUserResponse', (data) => {
      if(!users.includes(userName)) {
        setUsers(data);
        console.log("user ", users, data);
      }});   
  }, [socket, users]);

  return (
    <div className="chat">
      <ChatBar users={users}/>
      <div className="chat__main">
        <ChatBody
          messages={messages}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};
export default ChatPage;