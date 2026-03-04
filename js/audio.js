import { getSoundEnabled } from "./config.js";

const clickAudio = new Audio("assets/sounds/click.mp3");
clickAudio.volume = 0.25;

export function playClickSound() {
    if (!getSoundEnabled()) return;

    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {
        // Browser blockiert Audio ggf. ohne User-Geste.
    });
}
