const menuLinks = document.querySelectorAll(".menu a");
const bannerImage = document.querySelector(".fundo img");
const bannerH1 = document.querySelector(".texto1 h1");
const bannerH2 = document.querySelector(".texto1 h2");

// Salva os valores iniciais
const initialImage = bannerImage.src;
const initialH1 = bannerH1.innerHTML;
const initialH2 = bannerH2.innerHTML;

let timeout;

// Função para alternar as imagens com efeito de fade
function changeBanner(newImage, newH1, newH2, n) {
    // Adiciona a classe `active` para a transição de entrada
    bannerImage.classList.add("active");
    bannerImage.src = newImage;
    bannerH1.innerHTML = newH1;
    bannerH2.innerHTML = newH2;

    if (n == 1){
        bannerH1.style = 'font-size:40px'
    }else if(n == 2){
        bannerH1.style = 'font-size:30px';
    } else if( n == 3){
        bannerH1.style = 'font-size:30px';
    }else{
        bannerH1.style = 'font-size:40px'
    }
}

// Função para restaurar o banner inicial
function resetBanner() {
    bannerImage.classList.remove("active"); // Aplica o fade de saída
    setTimeout(() => {
        bannerImage.src = initialImage;
        bannerH1.innerHTML = initialH1;
        bannerH2.innerHTML = initialH2;
        bannerImage.classList.add("active"); // Volta ao estado visível
    }, 800); // O tempo deve ser igual ao da transição no CSS
}

menuLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        const newImage = link.getAttribute("data-image");
        const n = link.getAttribute("n");
        const newH1 = link.getAttribute("data-h1");
        const newH2 = link.getAttribute("data-h2");

        // Cancela o timeout anterior
        clearTimeout(timeout);

        // Altera o banner
        changeBanner(newImage, newH1, newH2, n);
    });

    link.addEventListener("mouseout", () => {
        // Define o retorno ao estado inicial após 3 segundos
        timeout = setTimeout(() => {
            resetBanner();
        }, 2000); // Tempo para a imagem inicial aparecer novamente
    });
});