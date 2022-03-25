class $f4ba170688a331cb$export$2e2bcd8739ae039 extends HTMLElement {
    static tagName = 'full-screen';
    /** @type {String} */ #target = null;
    get target() {
        return this.#target === null ? this.getAttribute('target') : this.#target;
    }
    set target(value) {
        this.#target = value.toString();
    }
    toggle() {
        const target = this.#getTargetEl();
        if (document.fullscreenElement === target) return document.exitFullscreen();
        else return target.requestFullscreen({
            navigationUI: 'hide'
        });
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
   */  #getTargetEl() {
        const idTarget = this.target && this.getRootNode().getElementById(this.target);
        return idTarget || this;
    }
}


customElements.define($f4ba170688a331cb$export$2e2bcd8739ae039.tagName, $f4ba170688a331cb$export$2e2bcd8739ae039);
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $f4ba170688a331cb$export$2e2bcd8739ae039;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
