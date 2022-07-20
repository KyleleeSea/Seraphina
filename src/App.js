import './App.css';
import Main from './components/Main';
import Pricing from './components/Pricing/Pricing.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;