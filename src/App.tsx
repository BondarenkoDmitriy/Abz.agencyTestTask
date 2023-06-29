import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { InfoSection } from './components/InfoSection/InfoSection';
import { FormSection } from './components/FormSection/FormSection';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <InfoSection />
      <FormSection />
    </div>
  );
};
