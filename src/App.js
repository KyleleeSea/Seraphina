import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;