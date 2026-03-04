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
        unlockCost: 5,                 // 5 Prestige Cookies
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
        unlockCost: 25,                // 25 Prestige Cookies
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

export function isWorldUnlocked(world, prestigeCookies) {
    return prestigeCookies >= world.unlockCost;
}
