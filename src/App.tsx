import React from 'react';
import './App.scss';
import { ChatMessenger } from './components/ChatMessenger/ChatMessenger';

export const App: React.FC = () => {
  return (
    <div>
      <ChatMessenger />
    </div>
  );
};
