const params = new URLSearchParams(window.location.search)
const id = Number(params.get("id"))

const emp = employees.find(e => e.id === id)

if (!emp) {
    window.location.href = "funcionarios.html"
}

const content = document.getElementById("content")

content.innerHTML = `
    <header class="page-header">
        <h2>${emp.nome}</h2>
        <span>${emp.cargo}</span>
    </header>

    <div class="employee-summary">
        <div class="summary-card">
            <h4>Setor</h4>
            <p>${emp.setor}</p>
        </div>

        <div class="summary-card">
            <h4>Status de Fadiga</h4>
            <p class="status ${emp.fadiga.status}">
                ${emp.fadiga.status === "low" ? "Baixo" :
                  emp.fadiga.status === "medium" ? "Médio" : "Alto"}
            </p>
        </div>

        <div class="summary-card">
            <h4>Horas Trabalhadas</h4>
            <p>${emp.fadiga.horasTrabalhadas}</p>
        </div>

        <div class="summary-card">
            <h4>Tempo sem Pausa</h4>
            <p>${emp.fadiga.tempoSemPausa}</p>
        </div>
    </div>

    <div class="indicators">
        <div class="indicator">
            <h4>Qualidade do Sono</h4>
            <p>${emp.fadiga.qualidadeSono}</p>
        </div>

        <div class="indicator">
            <h4>Carga Cognitiva</h4>
            <p>${emp.fadiga.cargaCognitiva}</p>
        </div>

        <div class="indicator risk">
            <h4>Índice de Risco</h4>
            <p>${emp.fadiga.indiceRisco}%</p>
        </div>
    </div>

    <div class="chart-card">
        <h3>Fadiga ao longo do turno</h3>
        <canvas id="fatigueChart"></canvas>
    </div>
`
