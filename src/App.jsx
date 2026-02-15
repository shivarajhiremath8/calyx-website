import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Placeholder Pages
const Home = () => <div className="p-10 text-3xl font-bold text-accent">Home Page (Ready to Build)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
