/* eslint-disable no-shadow */
// App.tsx
import React, { useState } from 'react';
import { ChatMessenger } from './components/ChatMessenger/ChatMessenger';
import { UserRole } from './types/roles';
import { Authorization } from './components/Authorization/Authorization';

export const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole | null>(null);

  const handleLogin = (username: string, role: UserRole) => {
    setUsername(username);
    setRole(role);
  };

  return (
    <div>
      {role ? (
        <ChatMessenger username={username} role={role} />
      ) : (
        <Authorization onLogin={handleLogin} />
      )}
    </div>
  );
};
