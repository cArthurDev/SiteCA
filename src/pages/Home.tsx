import { GraduationCap, Users, BookOpen } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-400 mb-8">
            Centro Acadêmico de Ciência da Computação
          </h1>
          
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-white">O que é um Centro Acadêmico?</h2>
            <p className="text-gray-300 leading-relaxed">
              O Centro Acadêmico é a entidade representativa dos estudantes de um curso de graduação.
              É um espaço democrático que promove a integração entre os alunos e atua como ponte entre
              o corpo discente e a instituição de ensino. Nossa missão é defender os interesses dos
              estudantes, promover atividades acadêmicas, culturais e sociais, além de contribuir
              para a formação profissional e pessoal dos alunos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Formação Acadêmica</h3>
              <p className="text-gray-300">
                Promovemos eventos, workshops e cursos complementares para enriquecer
                a formação dos estudantes.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Representação Estudantil</h3>
              <p className="text-gray-300">
                Somos a voz dos estudantes junto à coordenação, departamentos e
                instâncias superiores.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Desenvolvimento</h3>
              <p className="text-gray-300">
                Incentivamos o desenvolvimento técnico e pessoal através de
                projetos e iniciativas estudantis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}