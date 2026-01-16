const employees = [
    {
        id: 1,
        nome: "João Silva",
        cargo: "Operador de Máquina",
        setor: "Produção",
        fadiga: {
            status: "low",
            horasTrabalhadas: "6h 30min",
            tempoSemPausa: "1h 20min",
            qualidadeSono: "Boa",
            cargaCognitiva: "Moderada",
            indiceRisco: 42
        },
        graficos: {
            fadigaTurno: [20, 25, 30, 40, 45, 50],
            horasSemana: [6, 7, 8, 6, 5]
        }
    },
    {
        id: 2,
        nome: "Maria Santos",
        cargo: "Analista de TI",
        setor: "Tecnologia",
        fadiga: {
            status: "medium",
            horasTrabalhadas: "7h 40min",
            tempoSemPausa: "2h 10min",
            qualidadeSono: "Regular",
            cargaCognitiva: "Alta",
            indiceRisco: 68
        },
        graficos: {
            fadigaTurno: [30, 35, 45, 55, 65, 70],
            horasSemana: [8, 9, 8, 7, 6]
        }
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        cargo: "Supervisor",
        setor: "Operações",
        fadiga: {
            status: "high",
            horasTrabalhadas: "9h 10min",
            tempoSemPausa: "3h 00min",
            qualidadeSono: "Ruim",
            cargaCognitiva: "Alta",
            indiceRisco: 85
        },
        graficos: {
            fadigaTurno: [50, 60, 70, 80, 85, 90],
            horasSemana: [9, 10, 9, 8, 7]
        }
    }
]
