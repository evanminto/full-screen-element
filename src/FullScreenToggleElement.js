import FullScreenToggleEvent from './FullScreenToggleEvent';

/**
 *
 * @example
 * ```html
 *  <full-screen-toggle>
 *    <button type="button">
 *      Toggle Fullscreen
 *    </button>
 *  </full-screen-toggle>
 * ```
 *
 * @customElement full-screen-toggle
 */
export default class FullScreenToggleElement extends HTMLElement {
  static tagName = 'full-screen-toggle';

  static behaviors = {
    BUTTON: 'full-screen-toggle-button',
    TEMPLATE: 'full-screen-toggle-template',
  };

  connectedCallback() {
    this.addEventListener('click', this.#handleClick.bind(this));

    if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
      /** @type {HTMLTemplateElement} */
      const template =
        this.querySelector(
          `template[data-behavior="${FullScreenToggleElement.behaviors.TEMPLATE}"]`
        ) || this.querySelector('template');

      if (template) {
        template.replaceWith(template.content.cloneNode(true));
      }
    }
  }

  /**
   * @param {MouseEvent} event
   */
  #handleClick(event) {
    const toggleEl =
      event.target.closest(
        `[data-behavior="${FullScreenToggleElement.behaviors.TOGGLE}"]`
      ) || event.target.closest('button');

    if (toggleEl) {
      event.preventDefault();
      this.dispatchEvent(new FullScreenToggleEvent());
    }
  }
}
