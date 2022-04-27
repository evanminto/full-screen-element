import {defineProperty as $2SSWc$defineProperty, classPrivateMethodGet as $2SSWc$classPrivateMethodGet, classPrivateMethodInit as $2SSWc$classPrivateMethodInit} from "@swc/helpers";



class $eeba32eb0d9f6ecd$export$2e2bcd8739ae039 extends Event {
    constructor(){
        super($eeba32eb0d9f6ecd$export$2e2bcd8739ae039.eventName, {
            bubbles: true,
            composed: true
        });
    }
}
$2SSWc$defineProperty($eeba32eb0d9f6ecd$export$2e2bcd8739ae039, "eventName", 'full-screen-toggle');


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


class $0d50885bd7cdc9b8$export$2e2bcd8739ae039 extends HTMLElement {
    /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ async toggle() {
        if (document.fullscreenElement === this || document.webkitFullscreenElement === this) return $2a95bf0efb9d9a01$export$2e2bcd8739ae039();
        return $b8e9ea9ae9f657b7$export$2e2bcd8739ae039(this);
    }
    connectedCallback() {
        this.addEventListener($eeba32eb0d9f6ecd$export$2e2bcd8739ae039.eventName, ()=>this.toggle()
        );
    }
}
$2SSWc$defineProperty($0d50885bd7cdc9b8$export$2e2bcd8739ae039, "tagName", 'full-screen');




var /**
   * @param {MouseEvent} event
   */ _handleClick = /*#__PURE__*/ new WeakSet();
class $72c97a76bd96a08c$export$2e2bcd8739ae039 extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', $2SSWc$classPrivateMethodGet(this, _handleClick, handleClick).bind(this));
        if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
            /** @type {HTMLTemplateElement} */ const template = this.querySelector(`template[data-behavior="${$72c97a76bd96a08c$export$2e2bcd8739ae039.behaviors.TEMPLATE}"]`) || this.querySelector('template');
            if (template) template.replaceWith(template.content.cloneNode(true));
        }
    }
    constructor(...args){
        super(...args);
        $2SSWc$classPrivateMethodInit(this, _handleClick);
    }
}
$2SSWc$defineProperty($72c97a76bd96a08c$export$2e2bcd8739ae039, "tagName", 'full-screen-toggle');
$2SSWc$defineProperty($72c97a76bd96a08c$export$2e2bcd8739ae039, "behaviors", {
    BUTTON: 'full-screen-toggle-button',
    TEMPLATE: 'full-screen-toggle-template'
});
function handleClick(event) {
    const toggleEl = event.target.closest(`[data-behavior="${$72c97a76bd96a08c$export$2e2bcd8739ae039.behaviors.TOGGLE}"]`) || event.target.closest('button');
    if (toggleEl) {
        event.preventDefault();
        this.dispatchEvent(new $eeba32eb0d9f6ecd$export$2e2bcd8739ae039());
    }
}



customElements.define($0d50885bd7cdc9b8$export$2e2bcd8739ae039.tagName, $0d50885bd7cdc9b8$export$2e2bcd8739ae039);
customElements.define($72c97a76bd96a08c$export$2e2bcd8739ae039.tagName, $72c97a76bd96a08c$export$2e2bcd8739ae039);


export {$0d50885bd7cdc9b8$export$2e2bcd8739ae039 as FullScreenElement, $72c97a76bd96a08c$export$2e2bcd8739ae039 as FullScreenToggleElement, $eeba32eb0d9f6ecd$export$2e2bcd8739ae039 as FullScreenToggleEvent};
//# sourceMappingURL=module.js.map
