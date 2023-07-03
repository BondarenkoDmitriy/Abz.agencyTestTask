import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { InfoSection } from './components/InfoSection/InfoSection';
// import { FormSection } from './components/FormSection/FormSection';
import { CardCatalog } from './components/CardCatalog/CardCatalog';
import { FormComponents } from './components/FormComponents/FormComponents';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <InfoSection />
      <CardCatalog />
      <FormComponents />
    </div>
  );
};
