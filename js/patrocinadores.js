// const patrocinadores = [
//    {
//        nome: "Spaço Agrícola",
//        descricao: "Líder no mercado de tecnologia e inovação no Agronegócio.",
//        imagem: "imagens/empresa1.png",
//        instagram: "https://www.instagram.com/spacoagricola_/",
//        site: "https://www.spacoagricola.com.br/home/"
//    },
//];

const patrocinadores = [
];



document.addEventListener('DOMContentLoaded', () => {
    const patrocinadoresContainer = document.querySelector('.patrocinadores-grid');

    if (patrocinadores.length === 1) {
        patrocinadoresContainer.classList.add('single-patrocinador');
    }

    patrocinadores.forEach(patrocinador => {
        const patrocinadorElement = document.createElement('div');
        patrocinadorElement.className = 'patrocinador-card';
        
        patrocinadorElement.innerHTML = `
            <div class="patrocinador-imagem">
                <img src="${patrocinador.imagem}" alt="${patrocinador.nome}">
            </div>
            <h4>${patrocinador.nome}</h4>
            <p>${patrocinador.descricao}</p>
            <div class="patrocinador-links">
                <a href="${patrocinador.instagram}" target="_blank" class="icon-link">
                    <i data-lucide="instagram"></i>
                </a>
                <a href="${patrocinador.site}" target="_blank" class="icon-link">
                    <i data-lucide="external-link"></i>
                </a>
            </div>
        `;

        patrocinadoresContainer.appendChild(patrocinadorElement);
    });

    // Reinitialize Lucide icons for dynamically added content
    lucide.createIcons();
});
