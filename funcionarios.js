const employees = [
    {
        name: "João Silva",
        role: "Operador de Máquina",
        sector: "Produção",
        fatigue: "medium"
    },
    {
        name: "Maria Santos",
        role: "Analista de Qualidade",
        sector: "Qualidade",
        fatigue: "low"
    },
    {
        name: "Carlos Oliveira",
        role: "Motorista",
        sector: "Logística",
        fatigue: "high"
    },
    {
        name: "Ana Costa",
        role: "Técnica de Segurança",
        sector: "SST",
        fatigue: "low"
    }
];

const tableBody = document.getElementById("employeeTable");
const searchInput = document.getElementById("searchInput");

/* Renderizar tabela */
function renderTable(data) {
    tableBody.innerHTML = "";

    data.forEach(emp => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.role}</td>
            <td>${emp.sector}</td>
            <td class="status ${emp.fatigue}">
                ${emp.fatigue === "low" ? "Baixo" :
                  emp.fatigue === "medium" ? "Médio" : "Alto"}
            </td>
            <td>
                <button class="btn btn-view" onclick="viewEmployee('${emp.name}')">
                    Ver
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

/* Pesquisa */
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(value) ||
        emp.role.toLowerCase().includes(value) ||
        emp.sector.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

/* Ação */
function viewEmployee(name) {
    alert("Abrir dashboard do funcionário: " + name);
}

/* Inicial */
renderTable(employees);
