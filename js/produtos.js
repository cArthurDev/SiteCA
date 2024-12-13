
const produtos = [
    {
        nome: "Camiseta CACC",
        preco: "R$ 65,00",
        descricao: "Camiseta oficial do Centro Acadêmico",
        imagem: "camiseta.jpg",
        link: "https://api.whatsapp.com/send?phone=5564992817769&text=Ol%C3%A1,%20Queria%20Adquirir%20uma%20Camiseta%20do%20CACC"
    },
    {
        nome: "Caneca CACC",
        preco: "R$ 40,00",
        descricao: "Caneca personalizada",
        imagem: "caneca.jpg",
        link: "https://api.whatsapp.com/send?phone=5564992817769&text=Ol%C3%A1,%20Queria%20Adquirir%20uma%20Caneca%20do%20CACC"
    },
    {
        nome: "Bottons",
        preco: "R$ 10,00",
        descricao: "Botton do CACC",
        imagem: "botton.jpg",
        link: "https://api.whatsapp.com/send?phone=5564992817769&text=Ol%C3%A1,%20Queria%20Adquirir%20um%20Botton%20do%20CACC"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const produtosGrid = document.querySelector('.produtos-grid');

    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.className = 'produto-card';
        
        produtoElement.innerHTML = `
            <div class="produto-imagem">
                <img src="${produto.imagem}" alt="Imagem de ${produto.nome}">
            </div>
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <div class="produto-preco">${produto.preco}</div>
                <a href="${produto.link}" class="btn-primary">Comprar</a>
            </div>
        `;

        produtosGrid.appendChild(produtoElement);
    });

    // Reinitialize Lucide icons for dynamically added content
    lucide.createIcons();
});