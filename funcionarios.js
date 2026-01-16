const tableBody = document.getElementById("employeeTable")
const searchInput = document.getElementById("searchInput")

function renderTable(data) {
    tableBody.innerHTML = ""

    data.forEach(emp => {
        const row = document.createElement("tr")

        row.innerHTML = `
            <td>${emp.nome}</td>
            <td>${emp.cargo}</td>
            <td>${emp.setor}</td>
            <td class="status ${emp.fadiga.status}">
                ${emp.fadiga.status === "low" ? "Baixo" :
                  emp.fadiga.status === "medium" ? "Médio" : "Alto"}
            </td>
            <td>
                <button class="btn btn-view" onclick="verFuncionario(${emp.id})">
                    Ver
                </button>
            </td>
        `

        tableBody.appendChild(row)
    })
}

function verFuncionario(id) {
    window.location.href = `funcionarios-detalhes.html?id=${id}`
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase()

    const filtered = employees.filter(emp =>
        emp.nome.toLowerCase().includes(value) ||
        emp.cargo.toLowerCase().includes(value) ||
        emp.setor.toLowerCase().includes(value)
    )

    renderTable(filtered)
})

renderTable(employees)
