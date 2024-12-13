import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap, ShoppingBag, Users, Home, HandshakeIcon } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">CACC</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-purple-800 px-3 py-2 rounded-md">
                <Home className="inline-block mr-1" size={18} />
                Início
              </Link>
              <Link to="/cursos" className="hover:bg-purple-800 px-3 py-2 rounded-md">
                <GraduationCap className="inline-block mr-1" size={18} />
                Cursos
              </Link>
              <Link to="/produtos" className="hover:bg-purple-800 px-3 py-2 rounded-md">
                <ShoppingBag className="inline-block mr-1" size={18} />
                Produtos
              </Link>
              <Link to="/diretoria" className="hover:bg-purple-800 px-3 py-2 rounded-md">
                <Users className="inline-block mr-1" size={18} />
                Diretoria
              </Link>
              <Link to="/patrocinadores" className="hover:bg-purple-800 px-3 py-2 rounded-md">
                <HandshakeIcon className="inline-block mr-1" size={18} />
                Patrocinadores
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-purple-800 px-3 py-2 rounded-md">
              Início
            </Link>
            <Link to="/cursos" className="block hover:bg-purple-800 px-3 py-2 rounded-md">
              Cursos
            </Link>
            <Link to="/produtos" className="block hover:bg-purple-800 px-3 py-2 rounded-md">
              Produtos
            </Link>
            <Link to="/diretoria" className="block hover:bg-purple-800 px-3 py-2 rounded-md">
              Diretoria
            </Link>
            <Link to="/patrocinadores" className="block hover:bg-purple-800 px-3 py-2 rounded-md">
              Patrocinadores
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}