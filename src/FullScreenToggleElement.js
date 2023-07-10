import FullScreenToggleEvent from './FullScreenToggleEvent';
import fullscreenAPI from './fullscreenAPI';

/**
 * When the user clicks a button descendant of this element, it dispatches a
 * `full-screen-toggle` event.
 *
 * By default, the first `<button>` descendant is treated as a toggle button,
 * but buttons can be assigned behaviors using the `data-behavior` attribute,
 * set to the following values:
 *
 * - `toggle`
 * - `enter`
 * - `exit`
 *
 * ### Basic Example:
 * ```html
 *  <full-screen-toggle>
 *    <button type="button">
 *      Toggle Fullscreen
 *    </button>
 *  </full-screen-toggle>
 * ```
 *
 * ### Advanced Example:
 * ```html
 *   <full-screen-toggle>
 *     <button type="button" data-behavior="enter">Enter</button>
 *     <button type="button" data-behavior="exit">Exit</button>
 *   </full-screen-toggle>
 * ```
 *
 * @customElement full-screen-toggle
 * @attr active
 * @attr supported
 * @part toggle
 */
export default class FullScreenToggleElement extends HTMLElement {
  /**
   * @readonly
   */
  static tagName = 'full-screen-toggle';

  /**
   * @readonly
   */
  static behaviors = {
    TOGGLE: 'toggle',
    ENTER: 'enter',
    EXIT: 'exit',
  };

  connectedCallback() {
    if (fullscreenAPI.enabled) {
      this.setAttribute('supported', '');
    }

    this.attachShadow({ mode: 'open' });

    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <slot><button type="button" part="toggle">Toggle Fullscreen</button></slot>
      `;

      this.shadowRoot
        .querySelector('slot')
        ?.addEventListener('click', this.#handleClick.bind(this));
    }

    const handleFullscreenChange = this.#handleFullscreenChange.bind(this);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  }

  /**
   * @returns {boolean}
   */
  get active() {
    return this.hasAttribute('active');
  }

  /**
   * @returns {boolean}
   */
  get supported() {
    return this.hasAttribute('supported');
  }

  /**
   * @param {MouseEvent} event
   */
  #handleClick(event) {
    const { TOGGLE, ENTER, EXIT } = FullScreenToggleElement.behaviors;

    if (this.#elementHasBehavior(event.target)) {
      const { behavior = TOGGLE } = event.target.dataset;

      if (
        (this.active && behavior === ENTER) ||
        (!this.active && behavior === EXIT)
      ) {
        return;
      }

      event.preventDefault();
      this.dispatchEvent(new FullScreenToggleEvent());
    }
  }

  /**
   * @param {Element} el
   * @returns {boolean}
   */
  #elementHasBehavior(el) {
    const { TOGGLE, ENTER, EXIT } = FullScreenToggleElement.behaviors;
    const behaviorSelector = `[data-behavior="${TOGGLE}"], [data-behavior="${ENTER}"], [data-behavior="${EXIT}"]`;
    const behaviorsArePresent = this.querySelector(behaviorSelector);

    if (behaviorsArePresent) {
      return Boolean(el?.closest(behaviorSelector));
    }

    return (
      el === this.querySelector('button') ||
      el === this.shadowRoot?.querySelector('button')
    );
  }

  /**
   * @returns {void}
   */
  #handleFullscreenChange() {
    const isFullscreen = Boolean(fullscreenAPI.element);

    if (isFullscreen) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }
}
