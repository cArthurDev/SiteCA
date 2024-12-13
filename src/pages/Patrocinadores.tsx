import { HandshakeIcon } from 'lucide-react';

export function Patrocinadores() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <HandshakeIcon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Seja um Patrocinador
        </h2>
        <p className="text-gray-300 max-w-md mx-auto">
          Estamos em busca de parcerias para fortalecer nossa comunidade acadêmica.
          Entre em contato conosco para conhecer as oportunidades de patrocínio.
        </p>
        <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors">
          Entre em Contato
        </button>
      </div>
    </div>
  );
}