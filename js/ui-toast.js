let autosaveIndicator = null;
let indicatorTimeout;
const indicatorQueue = [];
let indicatorActive = false;

export function initToastSystem(indicatorEl) {
    autosaveIndicator = indicatorEl;
}

function dequeueIndicatorMessage() {
    if (!autosaveIndicator) {
        indicatorQueue.length = 0;
        indicatorActive = false;
        return;
    }

    const next = indicatorQueue.shift();
    if (!next) {
        indicatorActive = false;
        autosaveIndicator.classList.remove("show");
        autosaveIndicator.classList.remove("toast-success", "toast-warning", "toast-error", "toast-info");
        return;
    }

    const { message, duration, type } = next;

    autosaveIndicator.textContent = message;
    autosaveIndicator.classList.remove("toast-success", "toast-warning", "toast-error", "toast-info");
    autosaveIndicator.classList.add(`toast-${type}`);
    autosaveIndicator.classList.add("show");
    indicatorActive = true;

    clearTimeout(indicatorTimeout);
    indicatorTimeout = setTimeout(() => {
        autosaveIndicator.classList.remove("show");
        dequeueIndicatorMessage();
    }, duration);
}

export function showIndicatorMessage(message, duration = 1200, type = "info") {
    indicatorQueue.push({ message, duration, type });

    if (!indicatorActive) {
        dequeueIndicatorMessage();
    }
}

export function showAutosave() {
    showIndicatorMessage("💾 Gespeichert", 1000, "success");
}

export function showToast(message, duration = 1600, type = "info") {
    showIndicatorMessage(message, duration, type);
}
