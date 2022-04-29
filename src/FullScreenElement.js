import FullScreenToggleEvent from './FullScreenToggleEvent';
import fullscreenAPI from './fullscreenAPI';

/**
 * Toggles fullscreen on itself in a cross-browser-compatible way when a
 * descendant element dispatches the `full-screen-toggle` event.
 *
 * @example
 * ```html
 *  <full-screen>
 *    <p>Fullscreenable content</p>
 *
 *    <full-screen-toggle>
 *      <button type="button">
 *        Toggle Fullscreen
 *      </button>
 *    </full-screen-toggle>
 *  </full-screen>
 * ```
 *
 * @customElement full-screen
 */
export default class FullScreenElement extends HTMLElement {
  static tagName = 'full-screen';

  /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */
  async toggle() {
    const { element, exitFullscreen, requestFullscreen } = fullscreenAPI;

    if (element === this) {
      return exitFullscreen();
    }

    return requestFullscreen(this);
  }

  connectedCallback() {
    this.addEventListener(FullScreenToggleEvent.eventName, () => this.toggle());
  }
}
