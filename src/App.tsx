import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { InfoSection } from './components/InfoSection/InfoSection';
import { CardCatalog } from './components/CardCatalog/CardCatalog';
import { FormComponents } from './components/FormComponents/FormComponents';
import { SuccessfullyRegistered } from './components/SuccessfullyRegistered/SuccessfullyRegistered';

export const App: React.FC = () => {
  const [successRequset, setsuccessRequset] = useState(false);

  setTimeout(() => setsuccessRequset(false), 3000);

  return (
    <div>
      <Header />
      <InfoSection />
      <CardCatalog />
      <FormComponents setsuccessRequset={setsuccessRequset} />
      {successRequset && <SuccessfullyRegistered />}
    </div>
  );
};
