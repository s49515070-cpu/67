// =====================================
// BUILDINGS CONFIG – SNUS CLICKER
// Skalierend, Icon-ready, erweiterbar
// =====================================

export const buildings = [
    {
        id: "cursor",
        name: "Cursor",
        baseCost: 15,
        baseCps: 0.1,
        growth: 1.15,
        icon: "assets/buildings/cursor.png",
        side: "left"
    },
    {
        id: "farm",
        name: "Snus Farm",
        baseCost: 100,
        baseCps: 1,
        growth: 1.15,
        icon: "assets/buildings/farm.png",
        side: "right"
    },
    {
        id: "factory",
        name: "Snus Factory",
        baseCost: 1100,
        baseCps: 8,
        growth: 1.15,
        icon: "assets/buildings/factory.png",
        side: "left"
    },
    {
        id: "temple",
        name: "Snus Temple",
        baseCost: 12000,
        baseCps: 47,
        growth: 1.15,
        icon: "assets/buildings/temple.png",
        side: "right"
    }
];


// =====================================
// BUILDING FUNCTIONS
// =====================================

// Kosten berechnen (exponentielle Skalierung)
export function getBuildingCost(building, owned) {
    return Math.floor(building.baseCost * Math.pow(building.growth, owned));
}

// Produktion berechnen
export function getBuildingCps(building, owned) {
    return building.baseCps * owned;
}

// MAX Kauf berechnen
export function getMaxAffordable(building, owned, cookies) {
    let count = 0;
    let totalCost = 0;

    while (true) {
        let cost = getBuildingCost(building, owned + count);
        if (totalCost + cost > cookies) break;
        totalCost += cost;
        count++;
    }

    return count;
}
