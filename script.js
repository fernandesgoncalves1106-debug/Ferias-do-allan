// CONFIGURAÇÃO DA DATA DE RETORNO DO ALLAN
// Formato: Ano-Mês-DiaTHora:Minuto:Segundo-FusoHorário
const RETURN_DATE = "2026-09-01T07:00:00-03:00"; 

function updateCountdown() {
    const targetDate = new Date(RETURN_DATE).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const modal = document.getElementById("modal");

    // Se a data já passou (Allan voltou!)
    if (difference <= 0) {
        daysEl.innerText = "00";
        hoursEl.innerText = "00";
        minutesEl.innerText = "00";
        secondsEl.innerText = "00";
        
        // Exibe o modal de comemoração
        modal.classList.remove("hidden");
        return; // Para a execução do relógio
    }

    // Cálculos matemáticos de conversão de tempo
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualiza o HTML (adicionando zero à esquerda se for menor que 10)
    daysEl.innerText = days < 10 ? "0" + days : days;
    hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Fechar o modal quando clicar no botão
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal").classList.add("hidden");
});

// Atualiza o contador imediatamente ao abrir e depois a cada 1 segundo
updateCountdown();
setInterval(updateCountdown, 1000);
