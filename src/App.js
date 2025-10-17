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
import NearestOfficePage from './NearestOfficePage'; // NEW IMPORT

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
  NEAREST_OFFICE: 'nearest_office', // NEW VIEW ADDED
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  const renderView = () => {
    switch (currentView) {
      case VIEWS.CNIE:
        return <CNIEDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.PASSPORT:
        return <PassportDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.ACTE_NAISSANCE:
        return <ActeNaissanceDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.ACTE_MARIAGE:
        return <ActeMariageDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.ACTE_DECES:
        return <ActeDecesDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.RESIDENCE:
        return <ResidenceDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.PROPERTY_TITLE:
        return <PropertyTitleDetailsPage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.NEAREST_OFFICE: // NEW ROUTE
        return <NearestOfficePage onBack={() => setCurrentView(VIEWS.HOME)} />;
      case VIEWS.HOME:
      default:
        return <Homepage onNavigate={setCurrentView} views={VIEWS} />;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}
