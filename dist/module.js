import {classPrivateFieldGet as $2SSWc$classPrivateFieldGet, classPrivateFieldSet as $2SSWc$classPrivateFieldSet, classPrivateMethodGet as $2SSWc$classPrivateMethodGet, classPrivateMethodInit as $2SSWc$classPrivateMethodInit, classPrivateFieldInit as $2SSWc$classPrivateFieldInit, defineProperty as $2SSWc$defineProperty} from "@swc/helpers";


async function $b8e9ea9ae9f657b7$export$2e2bcd8739ae039(el) {
    if ('requestFullscreen' in el) return el.requestFullscreen({
        navigationUI: 'hide'
    });
    else if ('webkitRequestFullscreen' in el) return el.webkitRequestFullscreen({
        navigationUI: 'hide'
    });
}


function $2a95bf0efb9d9a01$export$2e2bcd8739ae039() {
    if ('exitFullscreen' in document) return document.exitFullscreen();
    else if ('webkitExitFullscreen' in document) return document.webkitExitFullscreen();
}


var /** @type {String} */ _target = /*#__PURE__*/ new WeakMap(), /**
   * @param {MouseEvent} event
   */ _handleClick = /*#__PURE__*/ new WeakSet(), /**
   * @returns {HTMLElement}
   */ _getTargetEl = /*#__PURE__*/ new WeakSet();
class $0d50885bd7cdc9b8$export$2e2bcd8739ae039 extends HTMLElement {
    /**
   * ID of an element. If the ID is null, an empty string, or doesn't exist
   * in the same document or shadow root as this element, this element
   * will be the default target.
   */ get target() {
        return $2SSWc$classPrivateFieldGet(this, _target) === null ? this.getAttribute('target') : $2SSWc$classPrivateFieldGet(this, _target);
    }
    set target(value) {
        $2SSWc$classPrivateFieldSet(this, _target, value.toString());
    }
    /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ async toggle() {
        const target = $2SSWc$classPrivateMethodGet(this, _getTargetEl, getTargetEl).call(this);
        if (document.fullscreenElement === target || document.webkitFullscreenElement === target) return $2a95bf0efb9d9a01$export$2e2bcd8739ae039();
        return $b8e9ea9ae9f657b7$export$2e2bcd8739ae039(target);
    }
    connectedCallback() {
        this.addEventListener('click', $2SSWc$classPrivateMethodGet(this, _handleClick, handleClick).bind(this));
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
            /** @type {HTMLTemplateElement} */ const template = this.querySelector(`template[data-behavior="${$0d50885bd7cdc9b8$export$2e2bcd8739ae039.behaviors.TEMPLATE}"]`);
            if (template) template.replaceWith(template.content.cloneNode(true));
        }
        this.attachShadow({
            mode: 'open'
        }).innerHTML = `
      <slot></slot>

      <style>
        :host {
          display: block;
        }
      </style>
    `;
    }
    constructor(...args){
        super(...args);
        $2SSWc$classPrivateMethodInit(this, _handleClick);
        $2SSWc$classPrivateMethodInit(this, _getTargetEl);
        $2SSWc$classPrivateFieldInit(this, _target, {
            writable: true,
            value: null
        });
    }
}
$2SSWc$defineProperty($0d50885bd7cdc9b8$export$2e2bcd8739ae039, "tagName", 'full-screen');
$2SSWc$defineProperty($0d50885bd7cdc9b8$export$2e2bcd8739ae039, "behaviors", {
    TOGGLE: 'full-screen-toggle',
    TEMPLATE: 'full-screen-template'
});
function handleClick(event) {
    const toggleEl = event.target.closest(`[data-behavior="${$0d50885bd7cdc9b8$export$2e2bcd8739ae039.behaviors.TOGGLE}"]`);
    if (toggleEl) {
        event.preventDefault();
        this.toggle();
    }
}
function getTargetEl() {
    const idTarget = this.target && this.getRootNode().getElementById(this.target);
    return idTarget || this;
}


customElements.define($0d50885bd7cdc9b8$export$2e2bcd8739ae039.tagName, $0d50885bd7cdc9b8$export$2e2bcd8739ae039);
var $c38b013c361dbfdf$export$2e2bcd8739ae039 = $0d50885bd7cdc9b8$export$2e2bcd8739ae039;


export {$c38b013c361dbfdf$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
