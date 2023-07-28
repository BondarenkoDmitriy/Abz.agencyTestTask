/* eslint-disable object-shorthand */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './chatMessenger.scss';
import { io } from 'socket.io-client';
import classNames from 'classnames';
import { UserRole } from '../../types/roles';

const socket = io('http://localhost:5000');

interface Props {
  username: string;
  role: UserRole;
}

export const ChatMessenger: React.FC<Props> = ({ username, role }) => {
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('authorize', {
        username: username,
        role: role,
      });
    });

    socket.on('chat message', (message: { from: string; text: string }) => {
      console.log('New message:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      socket.emit('chat message', {
        from: username,
        text: messageInput.trim(),
      });
      setMessageInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let hasError = false;

    inputValue.split('').forEach((char) => {
      if (char !== '.' && char !== '-') {
        setError('Please enter Morse code characters only (. or -)');
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    setError(null);
    setMessageInput(inputValue);
  };

  return (
    <div>
      <div className="chat__container">
        <div className="chat__body" id="message-container">
          {messages.map((message) => (
            <div
              key={message.from}
              className={classNames('chat__body__message', {
                chat__body__message__sender: message.from === username,
                chat__body__message__receiver: message.from !== username,
              })}
            >
              {message.from}
              :
              <br />
              {' '}
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat__footer">
          <input
            type="text"
            id="name-input"
            placeholder="Your Name"
            value={username}
            readOnly
            className="chat__footer__field"
          />

          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={handleInputChange}
            className={classNames('chat__footer__field', { 'chat__footer__field--error': error })}
          />
          {error && <div className="error-message">{error}</div>}
          <button
            type="button"
            onClick={handleSendMessage}
            className="chat__footer__field"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
