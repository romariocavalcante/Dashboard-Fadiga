const ctx = document.getElementById("reportChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: "Média de Fadiga (%)",
            data: [55, 62, 70, 65],
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
