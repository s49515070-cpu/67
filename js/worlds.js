// =====================================
// WORLDS CONFIG – SNUS CLICKER
// Frei editierbar
// =====================================

export const worlds = [
    {
        id: 1,
        name: "Golden Paradise",
        unlockCost: 0,                 // Startwelt
        multiplier: 1,
        cookieImage: "assets/cookies/world1.png",
        theme: {
            background: "linear-gradient(135deg, #dff6ff, #fdfbff)",
            glow: "gold",
            button: "linear-gradient(45deg, gold, orange)"
        }
    },
    {
        id: 2,
        name: "Rainbow Heaven",
        unlockCost: 250,               // Midgame-Fortschritt statt Sofort-Unlock
        requirements: {
            lifetimeCookies: 2_000,
            totalBuildings: 15
        },
        multiplier: 1.25,
        cookieImage: "assets/cookies/world2.png",
        theme: {
            background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb)",
            glow: "#ff00ff",
            button: "linear-gradient(45deg, #ff00cc, #3333ff)"
        }
    },
    {
        id: 3,
        name: "Divine Realm",
        unlockCost: 5000,              // Später Meilenstein
        requirements: {
            lifetimeCookies: 100_000,
            totalBuildings: 60
        },
        multiplier: 1.75,
        cookieImage: "assets/cookies/world3.png",
        theme: {
            background: "linear-gradient(135deg, #f3e7ff, #ffffff)",
            glow: "#a855f7",
            button: "linear-gradient(45deg, #a855f7, #ffffff)"
        }
    }
];


// =====================================
// WORLD FUNCTIONS
// =====================================

export function getWorldById(id) {
    return worlds.find(w => w.id === id);
}

export function getWorldUnlockDetails(world, snusAmount, progress = {}) {
    const requirements = world?.requirements || {};
    const lifetimeTarget = Number(requirements.lifetimeCookies || 0);
    const buildingsTarget = Number(requirements.totalBuildings || 0);

    const lifetimeCurrent = Number(progress.lifetimeCookies || 0);
    const buildingsCurrent = Number(progress.totalBuildings || 0);

    const hasCost = Number(snusAmount) >= Number(world?.unlockCost || 0);
    const hasLifetime = lifetimeCurrent >= lifetimeTarget;
    const hasBuildings = buildingsCurrent >= buildingsTarget;

    return {
        unlocked: hasCost && hasLifetime && hasBuildings,
        hasCost,
        hasLifetime,
        hasBuildings,
        missingCost: Math.max(0, Number(world?.unlockCost || 0) - Number(snusAmount || 0)),
        missingLifetime: Math.max(0, lifetimeTarget - lifetimeCurrent),
        missingBuildings: Math.max(0, buildingsTarget - buildingsCurrent),
        lifetimeTarget,
        buildingsTarget
    };
}

export function isWorldUnlocked(world, snusAmount, progress = {}) {
    return getWorldUnlockDetails(world, snusAmount, progress).unlocked;
}
