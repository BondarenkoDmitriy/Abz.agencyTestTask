// Login.tsx
import React, { useState } from 'react';
import { UserRole } from '../../types/roles';
import './authorization.scss';

interface Porps {
  onLogin: (username: string, role: UserRole) => void;
}

export const Authorization: React.FC<Porps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.User);

  const handleLogin = () => {
    if (username.trim() !== '') {
      onLogin(username, role);
    }
  };

  return (
    <div className="authorization">
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="authorization__field"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        className="authorization__field"
      >
        <option value={UserRole.User}>User</option>
        <option value={UserRole.Admin}>Admin</option>
        <option value={UserRole.Newby}>Newby</option>
      </select>
      <button
        type="submit"
        onClick={handleLogin}
        className="authorization__field"
      >
        Login
      </button>
    </div>
  );
};
