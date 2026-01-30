// 1. Configuração do Supabase
const _supabaseUrl = 'https://tfezavkgrphnbeamhpdi.supabase.co';
const _supabaseKey = 'sb_publishable_liaFGCo182Z5Fj1p3q2DpA_a5hOSTE9';
const supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// Iniciar animações
AOS.init({ duration: 1200 });

// 2. Função para buscar versículo aleatório
async function carregarVersiculo() {
    try {
        // Busca todos os IDs dos versículos
        const { data, error } = await supabase.from('versiculos').select('texto, referencia');
        
        if (error) throw error;

        if (data && data.length > 0) {
            // Sorteia um versículo da lista
            const sorteado = data[Math.floor(Math.random() * data.length)];
            
            // Coloca no site
            const container = document.getElementById('daily-verse');
            container.innerHTML = `"${sorteado.texto}" <br><small>${sorteado.referencia}</small>`;
        }
    } catch (err) {
        console.error('Erro ao carregar versículo:', err);
    }
}

// 3. Controle da Introdução (Bíblia)
const intro = document.getElementById('intro-screen');
const main = document.getElementById('main-content');

intro.addEventListener('click', () => {
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
        main.classList.remove('hidden');
        carregarVersiculo(); // Carrega o versículo assim que o site abre
        window.scrollTo(0, 0);
    }, 1000);
});