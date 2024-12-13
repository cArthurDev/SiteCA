import { Mail } from 'lucide-react';

const diretoria = [
  {
    cargo: "PRESIDENTE",
    nome: "Arthur Souza",
    foto: "arthur.jpg"
  },
  {
    cargo: "SECRETÁRIA DO PRESIDENTE",
    nome: "Maria Clara",
    foto: "maria.jpg"
  },
  {
    cargo: "VICE-PRESIDENTE",
    nome: "Gabriel Santos",
    foto: "gabriel.jpg"
  },
  {
    cargo: "SECRÉTARIO GERAL",
    nome: "Henrique Rodrigues",
    foto: "henrique.jpg"
  },
  {
    cargo: "TESOUREIRO",
    nome: "Wicolly",
    foto: "wicolly.jpg"
  },
  {
    cargo: "DIRETOR DE RELAÇÕES EXTERIORES",
    nome: "Amadeus",
    foto: "amadeus.jpg"
  }
];

export function Diretoria() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Diretoria CACC
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diretoria.map((membro) => (
            <div key={membro.nome} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
                  <Mail className="w-16 h-16 text-gray-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-1">{membro.cargo}</h3>
                <p className="text-gray-300">{membro.nome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}