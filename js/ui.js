import { gameState, clickCookie, buyBuilding, setBuyMode, calculateCps, changeWorld, prestigeReset } from "./engine.js";
import { buildings } from "./buildings.js";
import { worlds, getWorldById, isWorldUnlocked } from "./worlds.js";
import { prestigeUpgrades, buyPrestigeUpgrade } from "./prestige.js";

const cookieCountEl = document.getElementById("cookieCount");
const cpsEl = document.getElementById("cps");
const prestigeCountEl = document.getElementById("prestigeCount");
const worldNameEl = document.getElementById("worldName");
const worldButton = document.getElementById("worldButton");
const prestigeButton = document.getElementById("prestigeButton");
const leftColumn = document.getElementById("leftBuildings");
const rightColumn = document.getElementById("rightBuildings");
const cookieClickArea = document.getElementById("cookieClickArea");
const clickEffectContainer = document.getElementById("clickEffectContainer");
const mainCookie = document.getElementById("mainCookie");
const worldTransition = document.getElementById("worldTransition");

function formatNumber(num) {
    if (num < 1000) return num.toFixed(0);
    if (num < 1000000) return (num / 1000).toFixed(1) + "K";
    if (num < 1000000000) return (num / 1000000).toFixed(1) + "M";
    return (num / 1000000000).toFixed(1) + "B";
}

export function renderUI() {
    cookieCountEl.textContent = formatNumber(gameState.cookies);
    cpsEl.textContent = formatNumber(calculateCps());
    prestigeCountEl.textContent = gameState.prestigeCookies;
    worldNameEl.textContent = getWorldById(gameState.currentWorld).name;
}

export function renderBuildings() {
    leftColumn.innerHTML = "";
    rightColumn.innerHTML = "";

    buildings.forEach(building => {
        const owned = gameState.buildingData[building.id].owned;
        const cost = Math.floor(building.baseCost * Math.pow(building.growth, owned));

        const card = document.createElement("div");
        card.className = "building-card";

        if (gameState.cookies < cost) card.style.opacity = "0.5";

        card.innerHTML = `
            <img src="${building.icon}">
            <div>
                <div><strong>${building.name}</strong> (${owned})</div>
                <div>Kosten: ${formatNumber(cost)}</div>
            </div>
        `;

        card.addEventListener("click", () => {
            const success = buyBuilding(building.id);
            if (success) renderBuildings();
        });

        building.side === "left"
            ? leftColumn.appendChild(card)
            : rightColumn.appendChild(card);
    });
}

export function renderPrestigeUpgrades() {
    const container = document.getElementById("prestigeUpgrades");
    container.innerHTML = "";

    prestigeUpgrades.forEach(upgrade => {
        const div = document.createElement("div");
        div.style.marginBottom = "8px";
        div.style.cursor = "pointer";

        div.innerHTML = `
            <strong>${upgrade.name}</strong><br>
            ${upgrade.description}<br>
            Kosten: ${upgrade.cost} 🍪
        `;

        div.addEventListener("click", () => {
            const success = buyPrestigeUpgrade(upgrade.id);
            if (success) renderPrestigeUpgrades();
        });

        container.appendChild(div);
    });
}

cookieClickArea.addEventListener("click", (e) => {
    const amount = clickCookie();

    const effect = document.createElement("div");
    effect.className = "click-effect";
    effect.textContent = "+" + formatNumber(amount);

    effect.style.left = e.offsetX + "px";
    effect.style.top = e.offsetY + "px";

    clickEffectContainer.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
});

prestigeButton.addEventListener("click", () => {
    const earned = prestigeReset();
    if (earned > 0) {
        alert("Du hast " + earned + " Prestige Cookies erhalten!");
        renderBuildings();
        renderPrestigeUpgrades();
    }
});
