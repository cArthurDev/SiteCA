import { ShoppingBag } from 'lucide-react';

const produtos = [
  {
    nome: "Camiseta CACC",
    preco: "R$ 49,90",
    descricao: "Camiseta oficial do Centro Acadêmico"
  },
  {
    nome: "Caneca CACC",
    preco: "R$ 29,90",
    descricao: "Caneca personalizada"
  },
  {
    nome: "Adesivos",
    preco: "R$ 5,00",
    descricao: "Pack com 3 adesivos"
  }
];

export function Produtos() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Produtos CACC
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div key={produto.nome} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-4">
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-gray-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{produto.nome}</h3>
                <p className="text-gray-300 mb-4">{produto.descricao}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-400">{produto.preco}</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}