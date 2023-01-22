import React from 'react';
import './App.css';
import TopSection from './components/TopSection/TopSection';
import InfoSection from './components/InfoSection/InfoSection';
import MapSection from './components/MapSection/MapSection';

export default function App() {
    return (
      <div className="App">
        <TopSection />
        <InfoSection />
        <MapSection />
      </div>
    );
}