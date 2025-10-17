import React, { useState } from 'react';
import Homepage from './Homepage';
import CNIEDetailsPage from './CNIEDetailsPage';

// Define view constants for routing clarity
const VIEWS = {
  HOME: 'home',
  CNIE: 'cnie',
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);

  // Function to switch between views
  const navigateTo = (viewKey) => {
    setCurrentView(viewKey);
  };

  const renderView = () => {
    switch (currentView) {
      case VIEWS.CNIE:
        // Pass a prop to handle navigating back to home
        return <CNIEDetailsPage onBack={() => navigateTo(VIEWS.HOME)} />; 
      case VIEWS.HOME:
      default:
        // Pass a prop to handle navigating away from home
        return <Homepage onNavigate={navigateTo} />; 
    }
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}