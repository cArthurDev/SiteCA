import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cursos } from './pages/Cursos';
import { Produtos } from './pages/Produtos';
import { Diretoria } from './pages/Diretoria';
import { Patrocinadores } from './pages/Patrocinadores';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/diretoria" element={<Diretoria />} />
          <Route path="/patrocinadores" element={<Patrocinadores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;