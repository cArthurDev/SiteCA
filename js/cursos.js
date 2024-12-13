const cursos = [
    {
        categoria: "Programação",
        cursos: [
            {
                titulo: "Curso de Git",
                descricao: "Aprenda GIT do básico ao avançado.",
                imagem: "imagens/git.png",
                arquivo: "cursos/Curso-Git.rar"
            },
            {
                titulo: "Curso de Hacking",
                descricao: "Domine Hacking para aplicações diversas.",
                imagem: "imagens/hacking.png",
                arquivo: "cursos/Curso-Hacking.rar"
            }
        ]
    },
    {
        categoria: "Design",
        cursos: [
            {
                titulo: "Curso de UX",
                descricao: "Descubra os fundamentos de UX",
                imagem: "imagens/ux.png",
                arquivo: "cursos/Curso-Ux.rar"
            },
            {
                titulo: "Curso de Arquitetura e Design de Software",
                descricao: "Seja um especialista em Design de Software",
                imagem: "imagens/designsoftware.png",
                arquivo: "cursos/Curso-DesignSoftware.rar"
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cursosGrid = document.querySelector('.cursos-grid');

    cursos.forEach(categoria => {
        const categoriaElement = document.createElement('div');
        categoriaElement.className = 'curso-categoria';
        
        categoriaElement.innerHTML = `
            <h3>${categoria.categoria}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${categoria.cursos.map(curso => `
                    <div class="curso-card">
                        <div class="curso-imagem">
                            <img src="${curso.imagem}" alt="${curso.titulo}">
                        </div>
                        <h4>${curso.titulo}</h4>
                        <p>${curso.descricao}</p>
                        <a href="${curso.arquivo}" class="btn-primary" download>Baixar Curso</a>
                    </div>
                `).join('')}
            </div>
        `;

        cursosGrid.appendChild(categoriaElement);
    });

    // Reinitialize Lucide icons for dynamically added content (optional if you no longer use icons)
    lucide.createIcons();
});
