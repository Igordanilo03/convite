// Mostrar galeria ao clicar em "Me convença"
document.getElementById('convinceBtn').addEventListener('click', () => {
    // Esconde os botões
    document.getElementById('buttons').classList.add('hidden');
    // Mostra a galeria
    document.getElementById('gallery').classList.remove('hidden');
});

// Aceitar imediatamente
document.getElementById('acceptBtn').addEventListener('click', () => {
    // Esconde os botões
    document.getElementById('buttons').classList.add('hidden');
    // Mostra o calendário
    showCalendar();
});

// Escolha "Não vou mesmo assim"
document.getElementById('noBtn').addEventListener('click', () => {
    alert("Tudo bem, quem sabe da próxima vez. 😊");
    location.reload(); // Volta para o início
});

// Escolha "Me convenceu"
document.getElementById('yesBtn').addEventListener('click', () => {
    showCalendar();
});

// Mostrar o calendário
function showCalendar() {
    // Esconde a galeria (se estiver visível)
    document.getElementById('gallery').classList.add('hidden');
    // Mostra o calendário
    document.getElementById('calendarContainer').classList.remove('hidden');
}

// Confirmar Data
document.getElementById('confirmDate').addEventListener('click', () => {
    const date = document.getElementById('datePicker').value;
    if (date) {
        alert(`Ótimo! Marcado para ${date}. Vejo você lá! 🛍️`);
    } else {
        alert("Por favor, escolha uma data!");
    }
});

// Variáveis Globais
let currentDate = new Date(); // Data atual
let selectedDate = null; // Data selecionada pelo usuário

// Mostrar galeria ao clicar em "Me convença"
document.getElementById('convinceBtn').addEventListener('click', () => {
    document.getElementById('gallery').classList.remove('hidden');
    document.getElementById('buttons').classList.add('hidden');
});

// Aceitar imediatamente
document.getElementById('acceptBtn').addEventListener('click', () => {
    document.getElementById('buttons').classList.add('hidden'); // Esconde os botões
    showCalendar(); // Mostra o calendário estilizado
});

// Escolha "Não vou mesmo assim"
document.getElementById('noBtn').addEventListener('click', () => {
    alert("Tudo bem, quem sabe da próxima vez. 😊");
    location.reload(); // Volta para o início
});

// Escolha "Me convenceu"
document.getElementById('yesBtn').addEventListener('click', () => {
    showCalendar();
});

// Mostrar o calendário estilizado
function showCalendar() {
    document.getElementById('gallery').classList.add('hidden'); // Esconde a galeria
    document.getElementById('calendarContainer').classList.remove('hidden'); // Mostra o calendário
    renderCalendar(); // Renderiza o calendário
}

// Função para renderizar o calendário
function renderCalendar() {
    const monthYear = document.getElementById('monthYear'); // Exibição do mês e ano
    const daysContainer = document.getElementById('days'); // Contêiner dos dias
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    // Obtém o primeiro dia e o número de dias no mês atual
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Atualiza o título com o mês e ano
    monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Limpa os dias antigos
    daysContainer.innerHTML = '';

    // Adiciona dias vazios antes do início do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptySpan = document.createElement('span');
        daysContainer.appendChild(emptySpan);
    }

    // Adiciona os dias do mês
    for (let i = 1; i <= lastDateOfMonth; i++) {
        const daySpan = document.createElement('span');
        daySpan.textContent = i; // Adiciona o número do dia

        // Evento de clique para selecionar a data
        daySpan.addEventListener('click', () => {
            document.querySelectorAll('#calendar .days span').forEach(day => {
                day.classList.remove('selected'); // Remove a classe de outros dias
            });
            daySpan.classList.add('selected'); // Marca o dia clicado como selecionado
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i); // Salva a data selecionada
        });

        daysContainer.appendChild(daySpan); // Adiciona o dia ao contêiner
    }
}

// Navegar para o mês anterior
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1); // Altera o mês para o anterior
    renderCalendar(); // Re-renderiza o calendário
});

// Navegar para o próximo mês
document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1); // Altera o mês para o próximo
    renderCalendar(); // Re-renderiza o calendário
});

// Confirmar Data
document.getElementById('confirmDate').addEventListener('click', () => {
    if (selectedDate) {
        alert(`Ótimo! Marcado para ${selectedDate.toLocaleDateString('pt-BR')}. Vejo você lá! 🛍️`);
    } else {
        alert("Por favor, escolha uma data!");
    }
});

// Inicializa o calendário ao carregar o script
renderCalendar();


// Salvar resposta de "Aceitar"
document.getElementById('acceptBtn').addEventListener('click', () => {
    localStorage.setItem('response', 'aceitou'); // Salva a resposta como "aceitou"
    localStorage.setItem('date', null); // Limpa a data caso ainda não tenha sido escolhida
    showCalendar(); // Mostra o calendário
});

// Salvar resposta de "Não vou mesmo assim"
document.getElementById('noBtn').addEventListener('click', () => {
    localStorage.setItem('response', 'recusou'); // Salva a resposta como "recusou"
    alert("Tudo bem, quem sabe da próxima vez. 😊");
    location.reload(); // Recarrega a página
});

// Salvar a data escolhida no calendário
document.getElementById('confirmDate').addEventListener('click', () => {
    if (selectedDate) {
        const formattedDate = selectedDate.toLocaleDateString('pt-BR'); // Formata a data
        localStorage.setItem('date', formattedDate); // Salva a data
        alert(`Ótimo! Marcado para ${formattedDate}. Vejo você lá! 🛍️`);
    } else {
        alert("Por favor, escolha uma data!");
    }
});

// Recuperar resposta e data armazenadas
function getStoredResponse() {
    const response = localStorage.getItem('response'); // Pega a resposta
    const date = localStorage.getItem('date'); // Pega a data (se existir)

    if (response === 'aceitou') {
        console.log(`Ela aceitou! Data escolhida: ${date || 'Nenhuma data definida ainda.'}`);
    } else if (response === 'recusou') {
        console.log("Ela recusou o convite.");
    } else {
        console.log("Nenhuma resposta foi registrada ainda.");
    }
}

// Exemplo: Verificar os dados ao carregar a página
getStoredResponse();
