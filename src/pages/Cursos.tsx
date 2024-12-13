import { Code, Database, Globe, Server, Shield } from 'lucide-react';

const cursos = [
  {
    categoria: "Programação Básica",
    cursos: [
      {
        titulo: "Introdução à Lógica de Programação",
        descricao: "Fundamentos de algoritmos e lógica",
        icon: Code
      },
      {
        titulo: "Python para Iniciantes",
        descricao: "Aprenda a programar em Python do zero",
        icon: Code
      }
    ]
  },
  {
    categoria: "Desenvolvimento Web",
    cursos: [
      {
        titulo: "HTML5 e CSS3",
        descricao: "Fundamentos de desenvolvimento web",
        icon: Globe
      },
      {
        titulo: "JavaScript Moderno",
        descricao: "ES6+ e conceitos avançados",
        icon: Code
      }
    ]
  },
  {
    categoria: "Banco de Dados",
    cursos: [
      {
        titulo: "SQL Básico",
        descricao: "Fundamentos de banco de dados relacionais",
        icon: Database
      },
      {
        titulo: "MongoDB Essencial",
        descricao: "Introdução a bancos NoSQL",
        icon: Database
      }
    ]
  },
  {
    categoria: "DevOps",
    cursos: [
      {
        titulo: "Git e GitHub",
        descricao: "Controle de versão na prática",
        icon: Server
      },
      {
        titulo: "Docker Básico",
        descricao: "Containers para desenvolvedores",
        icon: Server
      }
    ]
  },
  {
    categoria: "Segurança",
    cursos: [
      {
        titulo: "Segurança Web",
        descricao: "Proteção de aplicações web",
        icon: Shield
      },
      {
        titulo: "Ethical Hacking",
        descricao: "Introdução à segurança ofensiva",
        icon: Shield
      }
    ]
  }
];

export function Cursos() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Cursos Gratuitos
        </h1>

        <div className="space-y-12">
          {cursos.map((categoria) => (
            <div key={categoria.categoria}>
              <h2 className="text-2xl font-semibold text-white mb-6">
                {categoria.categoria}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.cursos.map((curso) => (
                  <div key={curso.titulo} className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <curso.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{curso.titulo}</h3>
                    <p className="text-gray-300">{curso.descricao}</p>
                    <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                      Acessar Curso
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}