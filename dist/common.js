function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $c42bb815b3368eb3$export$2e2bcd8739ae039 extends HTMLElement {
    static tagName = 'full-screen';
    /** @type {String} */ #target = null;
    /**
   * ID of an element. If the ID is null, an empty string, or doesn't exist
   * in the same document or shadow root as this element, this element
   * will be the default target.
   */ get target() {
        return this.#target === null ? this.getAttribute('target') : this.#target;
    }
    set target(value) {
        this.#target = value.toString();
    }
    /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ toggle() {
        const target = this.#getTargetEl();
        if (document.fullscreenElement === target) return document.exitFullscreen();
        else return target.requestFullscreen({
            navigationUI: 'hide'
        });
    }
    connectedCallback() {
        this.addEventListener('click', this.#handleClick.bind(this));
    }
    /**
   * @param {MouseEvent} event
   */  #handleClick(event) {
        const toggleEl = event.target.closest('[data-behavior="full-screen-toggle"]');
        if (toggleEl) {
            event.preventDefault();
            this.toggle();
        }
    }
    /**
   * @returns {HTMLElement}
   */  #getTargetEl() {
        const idTarget = this.target && this.getRootNode().getElementById(this.target);
        return idTarget || this;
    }
}


customElements.define($c42bb815b3368eb3$export$2e2bcd8739ae039.tagName, $c42bb815b3368eb3$export$2e2bcd8739ae039);
var $4fa36e821943b400$export$2e2bcd8739ae039 = $c42bb815b3368eb3$export$2e2bcd8739ae039;


//# sourceMappingURL=common.js.map
