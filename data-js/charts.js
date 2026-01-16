new Chart(document.getElementById("fatigueChart"), {
    type: "line",
    data: {
        labels: ["08h", "10h", "12h", "14h", "16h", "18h"],
        datasets: [{
            label: "Nível de Fadiga",
            data: emp.graficos.fadigaTurno,
            tension: 0.4
        }]
    }
})
