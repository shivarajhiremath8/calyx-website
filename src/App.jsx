import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Intro from './components/common/Intro';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Wrapper to access useLocation
const AppContent = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has been shown this session, or just always show on refresh as requested
    // User requested: "open website automatically every refresh"
    setShowIntro(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
