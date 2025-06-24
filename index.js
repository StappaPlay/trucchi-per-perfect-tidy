/**
 * StappaPlay - Basic Volume Controller
 * Author: Romolo
 * License: Custom
 */

class StappaPlayVolume {
    /**
     * Sets the volume of a given HTMLMediaElement (audio or video).
     * @param {string} elementId - The ID of the audio or video element.
     * @param {number} volume - Volume level between 0.0 (muted) and 1.0 (max).
     */
    static setVolume(elementId, volume) {
        const media = document.getElementById(elementId);
        
        if (!media || !(media instanceof HTMLMediaElement)) {
            console.error(`[StappaPlay] Element with ID '${elementId}' is not a valid audio or video element.`);
            return;
        }

        if (volume < 0 || volume > 1) {
            console.warn('[StappaPlay] Volume must be between 0.0 and 1.0.');
            return;
        }

        media.volume = volume;
        console.log(`[StappaPlay] Volume set to ${volume * 100}%.`);
    }
}

// Example usage:
// StappaPlayVolume.setVolume('myAudio', 0.5);

module.exports = StappaPlayVolume;
