/**
 * Adds behavior to a button so that when clicked, it requests fullscreen mode
 * for the target element.
 *
 * The target element is the `<full-screen>` element by default, but the
 * `target` attribute can be used to target a different element instead.
 *
 * The button must be a descendent of this element and have the attribute
 * `data-behavior="full-screen-toggle"`.
 *
 * @example
 * ```html
 *  <full-screen>
 *    <p>Fullscreenable content</p>
 *
 *    <button type="button" data-behavior="full-screen-toggle">
 *      Toggle Fullscreen
 *    </button>
 *  </full-screen>
 * ```
 *
 * @customElement full-screen
 * @attr {String} target - ID of the HTML element to make fullscreen (optional)
 */
export default class FullscreenElement extends HTMLElement {
  static tagName = 'full-screen';

  /** @type {String} */
  #target = null;

  /**
   * ID of an element. If the ID is null, an empty string, or doesn't exist
   * in the same document or shadow root as this element, this element
   * will be the default target.
   */
  get target() {
    return this.#target === null ? this.getAttribute('target') : this.#target;
  }

  set target(value) {
    this.#target = value.toString();
  }

  /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */
  toggle() {
    const target = this.#getTargetEl();

    if (document.fullscreenElement === target) {
      return document.exitFullscreen();
    } else {
      return target.requestFullscreen({ navigationUI: 'hide' });
    }
  }

  connectedCallback() {
    this.addEventListener('click', this.#handleClick.bind(this));
  }

  #handleClick(event) {
    if (event.target.matches('[data-behavior="full-screen-toggle"')) {
      event.preventDefault();
      this.toggle();
    }
  }

  /**
   * @returns {HTMLElement}
   */
  #getTargetEl() {
    const idTarget =
      this.target && this.getRootNode().getElementById(this.target);

    return idTarget || this;
  }
}
