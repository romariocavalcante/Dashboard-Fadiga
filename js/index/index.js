// ================== DADOS SIMULADOS ==================
const fatigueData = [20, 35, 45, 60, 70, 80];
const hoursWeek = [7, 8, 6, 9, 7.5];

// ================== GRÁFICO FADIGA ==================
const fatigueCtx = document.getElementById("fatigueChart");

new Chart(fatigueCtx, {
    type: "line",
    data: {
        labels: ["08h", "10h", "12h", "14h", "16h", "18h"],
        datasets: [{
            label: "Nível de Fadiga (%)",
            data: fatigueData,
            tension: 0.4
        }]
    }
});

// ================== GRÁFICO HORAS ==================
const hoursCtx = document.getElementById("hoursChart");

new Chart(hoursCtx, {
    type: "bar",
    data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex"],
        datasets: [{
            label: "Horas Trabalhadas",
            data: hoursWeek
        }]
    }
});

// ================== ÍNDICE DE RISCO ==================
function calculateRisk(hoursWorked, breaks, sleepQuality) {
    let risk = 0;

    risk += hoursWorked * 5;
    risk -= breaks * 10;

    if (sleepQuality === "Ruim") risk += 20;
    if (sleepQuality === "Boa") risk -= 10;

    return Math.min(Math.max(risk, 0), 100);
}

const hoursWorked = 6.5;
const breaks = 2;
const sleepQuality = "Boa";

const risk = calculateRisk(hoursWorked, breaks, sleepQuality);

document.getElementById("risk").textContent = risk + "%";

// ================== ALERTA AUTOMÁTICO ==================
const alertElement = document.getElementById("alert");

if (risk > 75) {
    alertElement.textContent = "⚠️ Alto risco de fadiga! Interromper atividade.";
} else if (risk > 50) {
    alertElement.textContent = "⚠️ Risco moderado. Pausa recomendada.";
} else {
    alertElement.textContent = "Condição segura.";
}

