import FullScreenToggleEvent from './FullScreenToggleEvent';
import fullscreenAPI from './fullscreenAPI';

/**
 * When the user clicks a button descendant of this element, it dispatches a
 * `full-screen-toggle` event.
 *
 * If a template is provided, it will only instantiate it if the browser
 * supports fullscreen.
 *
 * To select a different template or trigger element, add the following data
 * attributes:
 *  - data-full-screen-toggle-template
 *  - data-full-screen-toggle-trigger
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
  /**
   * @readonly
   */
  static tagName = 'full-screen-toggle';

  /**
   * @readonly
   */
  static behaviors = {
    TEMPLATE: 'data-full-screen-toggle-template',
    TRIGGER: 'data-full-screen-toggle-trigger',
  };

  connectedCallback() {
    this.#addEventListeners();

    if (fullscreenAPI.enabled) {
      this.#cloneTemplate();
    }
  }

  #addEventListeners() {
    this.addEventListener('click', this.#handleClick.bind(this));

    const handleFullscreenChange = this.#handleFullscreenChange.bind(this);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
  }

  #cloneTemplate() {
    const fallbackToQS = (value, selector) =>
      value || this.querySelector(selector);

    const selectors = [
      `template[${FullScreenToggleElement.behaviors.TEMPLATE}]`,
      'template',
    ];

    /** @type {HTMLTemplateElement} */
    const template = selectors.reduce(fallbackToQS, null);

    if (!template) {
      return;
    }

    template.replaceWith(template.content.cloneNode(true));
  }

  /**
   * @param {MouseEvent} event
   */
  #handleClick(event) {
    const customSelector = `[${FullScreenToggleElement.behaviors.TRIGGER}]`;
    const hasCustomTrigger = Boolean(this.querySelector(customSelector));

    const toggleEl = event.target.closest(
      hasCustomTrigger ? customSelector : 'button'
    );

    if (toggleEl) {
      event.preventDefault();
      this.dispatchEvent(new FullScreenToggleEvent());
    }
  }

  #handleFullscreenChange() {
    const isFullscreen = Boolean(fullscreenAPI.element);

    if (isFullscreen) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }
  }
}
