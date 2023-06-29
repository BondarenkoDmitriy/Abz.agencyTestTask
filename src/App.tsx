import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { InfoSection } from './components/InfoSection/InfoSection';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <InfoSection />
    </div>
  );
};
