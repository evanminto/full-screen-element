import FullScreenToggleEvent from './FullScreenToggleEvent';
import requestFullscreen from './requestFullscreen';
import exitFullscreen from './exitFullscreen';

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
 * @attr {String} target - ID of the HTML element to make fullscreen (optional)
 */
export default class FullScreenElement extends HTMLElement {
  static tagName = 'full-screen';

  /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */
  async toggle() {
    if (
      document.fullscreenElement === this ||
      document.webkitFullscreenElement === this
    ) {
      return exitFullscreen();
    }

    return requestFullscreen(this);
  }

  connectedCallback() {
    this.addEventListener(FullScreenToggleEvent.eventName, () => this.toggle());
  }
}
