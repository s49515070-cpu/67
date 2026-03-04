export const gameState = {

    cookies: 0,
    clickPower: 1,
    prestigeCookies: 0,
    prestigeMultiplier: 1,

    buildings: {
        cursor: { count: 0, baseCost: 15, production: 0.1 },
        farm: { count: 0, baseCost: 100, production: 1 },
        factory: { count: 0, baseCost: 1100, production: 8 }
    }
};


// ===============================
// KLICKEN
// ===============================

export function clickCookie() {
    gameState.cookies += gameState.clickPower * gameState.prestigeMultiplier;
}


// ===============================
// GEBÄUDE KAUFEN
// ===============================

export function buyBuilding(name) {

    const building = gameState.buildings[name];
    if (!building) return;

    const cost = getBuildingCost(name);

    if (gameState.cookies >= cost) {
        gameState.cookies -= cost;
        building.count++;
    }
}

export function getBuildingCost(name) {

    const building = gameState.buildings[name];
    return Math.floor(building.baseCost * Math.pow(1.15, building.count));
}


// ===============================
// PRODUKTION PRO SEKUNDE
// ===============================

export function getProductionPerSecond() {

    let total = 0;

    for (let key in gameState.buildings) {
        const b = gameState.buildings[key];
        total += b.count * b.production;
    }

    return total * gameState.prestigeMultiplier;
}

export function updateGame() {
    gameState.cookies += getProductionPerSecond() / 10;
}


// ===============================
// PRESTIGE RESET
// ===============================

export function prestigeReset() {

    const earned = Math.floor(gameState.cookies / 10000);

    if (earned <= 0) return 0;

    gameState.prestigeCookies += earned;

    gameState.cookies = 0;
    gameState.clickPower = 1;

    for (let key in gameState.buildings) {
        gameState.buildings[key].count = 0;
    }

    return earned;
}
