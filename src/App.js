import React, { useState } from 'react';
import Homepage from './Homepage';
import CNIEDetailsPage from './CNIEDetailsPage';
import PassportDetailsPage from './PassportDetailsPage'; 
import ActeNaissanceDetailsPage from './ActeNaissanceDetailsPage'; 
// New Imports
import ActeMariageDetailsPage from './ActeMariageDetailsPage';
import ActeDecesDetailsPage from './ActeDecesDetailsPage';
import ResidenceDetailsPage from './ResidenceDetailsPage';
import PropertyTitleDetailsPage from './PropertyTitleDetailsPage';

// Define view constants for routing clarity
const VIEWS = {
  HOME: 'home',
  CNIE: 'cnie',
  PASSPORT: 'passport', 
  ACTE_NAISSANCE: 'acte_naissance', 
  // New Views
  ACTE_MARIAGE: 'acte_mariage',
  ACTE_DECES: 'acte_deces',
  RESIDENCE: 'residence',
  PROPERTY_TITLE: 'property_title',
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  // Function to switch between views
  const navigateTo = (viewKey) => {
    setCurrentView(viewKey);
  };

  const renderView = () => {
    switch (currentView) {
      case VIEWS.PASSPORT:
        return <PassportDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.ACTE_NAISSANCE:
        return <ActeNaissanceDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.ACTE_MARIAGE:
        return <ActeMariageDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.ACTE_DECES:
        return <ActeDecesDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.RESIDENCE:
        return <ResidenceDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.PROPERTY_TITLE:
        return <PropertyTitleDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />;
      case VIEWS.CNIE:
        return <CNIEDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />; 
      case VIEWS.HOME:
      default:
        return <Homepage onNavigate={navigateTo} />; 
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}