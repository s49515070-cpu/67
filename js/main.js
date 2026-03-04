import { gameLoop } from "./engine.js";
import { renderUI, renderBuildings, renderPrestigeUpgrades, applyWorldTheme } from "./ui.js";
import { loadGame, saveGame } from "./save.js";

function init() {
    loadGame();
    applyWorldTheme();
    renderBuildings();
    renderPrestigeUpgrades();

    gameLoop();
    uiLoop();

    setInterval(saveGame, 5000);
}

function uiLoop() {
    renderUI();
    renderBuildings();
    requestAnimationFrame(uiLoop);
}

init();
