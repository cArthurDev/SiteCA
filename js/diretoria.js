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

document.addEventListener('DOMContentLoaded', () => {
    const diretoriaGrid = document.querySelector('.diretoria-grid');

    diretoria.forEach(membro => {
        const membroElement = document.createElement('div');
        membroElement.className = 'membro-card';
        
        membroElement.innerHTML = `
            <div class="membro-foto"> 
                <img src="${membro.foto}" alt="Foto de ${membro.nome}"> 
            </div>
            <div class="membro-info">
                <div class="membro-cargo">${membro.cargo}</div>
                <div class="membro-nome">${membro.nome}</div>
            </div>
        `;

        diretoriaGrid.appendChild(membroElement);
    });

    lucide.createIcons();
});