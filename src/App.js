import './App.css';
import Main from './components/Main.js';
import Landing from './components/Landing.js';
import Pricing from './components/Pricing/Pricing.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/generate" exact element={<Main />} />
          <Route path="/" exact element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;