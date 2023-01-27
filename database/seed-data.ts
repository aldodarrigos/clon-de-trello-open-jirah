interface SeedData {
    entries: SeedEntry[]   
}

interface SeedEntry{
    description: string;
    status: string;
    createdAt: number;
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente - Lorem ipppspsps',
            status:'pending',
            createdAt:Date.now()
        },
        {
            description: 'En progreso- Lorem ipppspspsssswww',
            status:'in-progress',
            createdAt:Date.now() - 100000,
        },
        {
            description: 'Terminado - Lorem swwwwps',
            status:'finished',
            createdAt:Date.now()- 10000
        },
    ]
}