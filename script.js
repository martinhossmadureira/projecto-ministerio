// Iniciar a biblioteca de animação
AOS.init({ duration: 1200 });

const intro = document.getElementById('intro-screen');
const main = document.getElementById('main-content');

// Ao clicar na tela inicial, ela desaparece e o site aparece
intro.addEventListener('click', () => {
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 1000);
});