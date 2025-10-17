import React, { useState } from 'react';
import Homepage from './Homepage';
import CNIEDetailsPage from './CNIEDetailsPage';
import PassportDetailsPage from './PassportDetailsPage'; 
import ActeNaissanceDetailsPage from './ActeNaissanceDetailsPage'; 
// Existing New Imports
import ActeMariageDetailsPage from './ActeMariageDetailsPage';
import ActeDecesDetailsPage from './ActeDecesDetailsPage';
import ResidenceDetailsPage from './ResidenceDetailsPage';
import PropertyTitleDetailsPage from './PropertyTitleDetailsPage';
import NearestOfficePage from './NearestOfficePage'; // NEW IMPORT

// New Document Imports (تمت الإضافة)
import ContratLocationDetailsPage from './ContratLocationDetailsPage';
import CNSSAffiliationDetailsPage from './CNSSAffiliationDetailsPage';
import AttestationTravailDetailsPage from './AttestationTravailDetailsPage';
import BaccalaureatDetailsPage from './BaccalaureatDetailsPage';

// Define view constants for routing clarity
const VIEWS = {
  HOME: 'home',
  CNIE: 'cnie',
  PASSPORT: 'passport', 
  ACTE_NAISSANCE: 'acte_naissance', 
  // Existing New Views
  ACTE_MARIAGE: 'acte_mariage',
  ACTE_DECES: 'acte_deces',
  RESIDENCE: 'residence',
  PROPERTY_TITLE: 'property_title',
  NEAREST_OFFICE: 'nearest_office', // NEW VIEW ADDED
  
  // New Document Views (تمت الإضافة)
  CONTRAT_LOCATION: 'contrat_location',
  CNSS_AFFILIATION: 'cnss_affiliation',
  ATTESTATION_TRAVAIL: 'attestation_travail',
  BACALAUREAT: 'bacalaureat',
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  // نستخدم حالة إضافية لتمرير البيانات للصفحة (مثل اسم الوثيقة)
  const [viewData, setViewData] = useState({});

  const handleNavigate = (view, data = {}) => {
    setViewData(data);
    setCurrentView(view);
  };
  
  const handleBack = () => {
    setViewData({});
    setCurrentView(VIEWS.HOME);
  }

  const renderView = () => {
    switch (currentView) {
      case VIEWS.CNIE:
        return <CNIEDetailsPage onBack={handleBack} />;
      case VIEWS.PASSPORT:
        return <PassportDetailsPage onBack={handleBack} />;
      case VIEWS.ACTE_NAISSANCE:
        return <ActeNaissanceDetailsPage onBack={handleBack} />;
      case VIEWS.ACTE_MARIAGE:
        return <ActeMariageDetailsPage onBack={handleBack} />;
      case VIEWS.ACTE_DECES:
        return <ActeDecesDetailsPage onBack={handleBack} />;
      case VIEWS.RESIDENCE:
        return <ResidenceDetailsPage onBack={handleBack} />;
      case VIEWS.PROPERTY_TITLE:
        return <PropertyTitleDetailsPage onBack={handleBack} />;
      case VIEWS.NEAREST_OFFICE: // EXISTING ROUTE
        return <NearestOfficePage onBack={handleBack} documentName={viewData.documentName} />;

      // New Document Pages (تمت الإضافة)
      case VIEWS.CONTRAT_LOCATION:
        return <ContratLocationDetailsPage onBack={handleBack} name={viewData.name} nameFr={viewData.nameFr} />;
      case VIEWS.CNSS_AFFILIATION:
        return <CNSSAffiliationDetailsPage onBack={handleBack} name={viewData.name} nameFr={viewData.nameFr} />;
      case VIEWS.ATTESTATION_TRAVAIL:
        return <AttestationTravailDetailsPage onBack={handleBack} name={viewData.name} nameFr={viewData.nameFr} />;
      case VIEWS.BACALAUREAT:
        return <BaccalaureatDetailsPage onBack={handleBack} name={viewData.name} nameFr={viewData.nameFr} />;

      case VIEWS.HOME:
      default:
        // نستخدم handleNavigate بدلاً من setCurrentView لتمرير البيانات والتحكم في التنقل
        return <Homepage onNavigate={handleNavigate} views={VIEWS} />;
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}
