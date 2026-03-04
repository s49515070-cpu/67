import { getLanguage } from "./config.js";

const translations = {
    de: {
        statsSnus: "Snus",
        statsPerSecond: "Pro Sekunde",
        statsPrestigeSnus: "Prestige-Snus",
        worldSwitch: "🌍 Welt wechseln",
        worldLocked: "🔒 Diese Welt ist noch gesperrt!",
        worldUnlockProgress: "Nächste Welt in {remaining} Prestige-Snus",
        worldAllUnlocked: "Alle Welten freigeschaltet",
        prestigeTitle: "💎 Prestige Upgrades",
        prestigeReset: "Prestige-Reset",
        milestonesTitle: "🎯 Milestones",
        settingsOpen: "⚙️ Einstellungen",
        settingsTitle: "Einstellungen",
        close: "Schließen",
        settingSound: "Sound",
        settingLanguage: "Sprache",
        languageGerman: "Deutsch",
        languageEnglish: "Englisch",
        exportSave: "📤 Save exportieren",
        importSave: "📥 Save importieren",
        resetSave: "🗑️ Save zurücksetzen",
        resetSaveHint: "Achtung: löscht den Spielstand.",
        resetSettings: "↺ Einstellungen zurücksetzen",
        autosaveUpdated: "⚙️ Autosave aktualisiert.",
        settingsResetDone: "↺ Einstellungen auf Standard zurückgesetzt.",
        soundOn: "An",
        soundOff: "Aus",
        reward: "Belohnung",
        nextPrice: "Nächster Preis",
        purchase: "Kauf",
        snus: "Snus",
        prestigeSnus: "Prestige-Snus",
        activeBonuses: "Aktive Boni",
        cost: "Kosten",
        maxReached: "MAX erreicht",
        levelShort: "Lvl",
        earnedPrestige: "✨ Du hast {amount} Prestige-Snus erhalten!",
        notEnoughLifetime: "ℹ️ Noch nicht genug Lifetime-Snus für Prestige."
    },
    en: {
        statsSnus: "Snus",
        statsPerSecond: "Per second",
        statsPrestigeSnus: "Prestige Snus",
        worldSwitch: "🌍 Switch world",
        worldLocked: "🔒 This world is still locked!",
        worldUnlockProgress: "Next world unlocks in {remaining} Prestige Snus",
        worldAllUnlocked: "All worlds unlocked",
        prestigeTitle: "💎 Prestige Upgrades",
        prestigeReset: "Prestige Reset",
        milestonesTitle: "🎯 Milestones",
        settingsOpen: "⚙️ Settings",
        settingsTitle: "Settings",
        close: "Close",
        settingSound: "Sound",
        settingLanguage: "Language",
        languageGerman: "German",
        languageEnglish: "English",
        exportSave: "📤 Export save",
        importSave: "📥 Import save",
        resetSave: "🗑️ Reset save",
        resetSaveHint: "Warning: deletes the current save.",
        resetSettings: "↺ Reset settings",
        autosaveUpdated: "⚙️ Autosave updated.",
        settingsResetDone: "↺ Settings reset to default.",
        soundOn: "On",
        soundOff: "Off",
        reward: "Reward",
        nextPrice: "Next price",
        purchase: "Buy",
        snus: "Snus",
        prestigeSnus: "Prestige Snus",
        activeBonuses: "Active bonuses",
        cost: "Cost",
        maxReached: "MAX reached",
        levelShort: "Lvl",
        earnedPrestige: "✨ You received {amount} Prestige Snus!",
        notEnoughLifetime: "ℹ️ Not enough lifetime snus for prestige yet."
    }
};

function format(template, vars = {}) {
    return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

export function t(key, vars) {
    const lang = getLanguage();
    const dictionary = translations[lang] || translations.de;
    const fallback = translations.de[key] || key;
    const phrase = dictionary[key] || fallback;

    return vars ? format(phrase, vars) : phrase;
}

export function getSupportedLanguages() {
    return ["de", "en"];
}
