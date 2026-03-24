import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Editor from './pages/Editor';

const App = () => (
  <Router basename="/">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  </Router>
);

export default App;
