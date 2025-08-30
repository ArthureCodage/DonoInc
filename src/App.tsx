import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import About from './components/About';
import Footer from './components/Footer';
import RestrictedAccess from './components/RestrictedAccess';

function App() {
  const [showRestricted, setShowRestricted] = useState(false);

  if (showRestricted) {
    return <RestrictedAccess onBack={() => setShowRestricted(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <ServicesGrid onRestrictedAccess={() => setShowRestricted(true)} />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;