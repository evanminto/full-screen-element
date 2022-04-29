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


var $fd0806085991f6b5$export$2e2bcd8739ae039 = {
    get enabled () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    },
    /**
   * @returns {Element}
   */ get element () {
        return document.fullscreenElement || document.webkitFullscreenElement;
    },
    requestFullscreen: $b8e9ea9ae9f657b7$export$2e2bcd8739ae039,
    exitFullscreen: $2a95bf0efb9d9a01$export$2e2bcd8739ae039
};


class $0d50885bd7cdc9b8$export$2e2bcd8739ae039 extends HTMLElement {
    /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ async toggle() {
        const { element: element , exitFullscreen: exitFullscreen , requestFullscreen: requestFullscreen  } = $fd0806085991f6b5$export$2e2bcd8739ae039;
        if (element === this) return exitFullscreen();
        return requestFullscreen(this);
    }
    connectedCallback() {
        this.addEventListener($eeba32eb0d9f6ecd$export$2e2bcd8739ae039.eventName, ()=>this.toggle()
        );
    }
}
$2SSWc$defineProperty($0d50885bd7cdc9b8$export$2e2bcd8739ae039, "tagName", 'full-screen');





var _addEventListeners = /*#__PURE__*/ new WeakSet(), _cloneTemplate = /*#__PURE__*/ new WeakSet(), /**
   * @param {MouseEvent} event
   */ _handleClick = /*#__PURE__*/ new WeakSet(), _handleFullscreenChange = /*#__PURE__*/ new WeakSet();
class $72c97a76bd96a08c$export$2e2bcd8739ae039 extends HTMLElement {
    connectedCallback() {
        $2SSWc$classPrivateMethodGet(this, _addEventListeners, addEventListeners).call(this);
        if ($fd0806085991f6b5$export$2e2bcd8739ae039.enabled) $2SSWc$classPrivateMethodGet(this, _cloneTemplate, cloneTemplate).call(this);
    }
    constructor(...args){
        super(...args);
        $2SSWc$classPrivateMethodInit(this, _addEventListeners);
        $2SSWc$classPrivateMethodInit(this, _cloneTemplate);
        $2SSWc$classPrivateMethodInit(this, _handleClick);
        $2SSWc$classPrivateMethodInit(this, _handleFullscreenChange);
    }
}
/**
   * @readonly
   */ $2SSWc$defineProperty($72c97a76bd96a08c$export$2e2bcd8739ae039, "tagName", 'full-screen-toggle');
/**
   * @readonly
   */ $2SSWc$defineProperty($72c97a76bd96a08c$export$2e2bcd8739ae039, "behaviors", {
    TEMPLATE: 'data-full-screen-toggle-template',
    TRIGGER: 'data-full-screen-toggle-trigger'
});
function addEventListeners() {
    this.addEventListener('click', $2SSWc$classPrivateMethodGet(this, _handleClick, handleClick).bind(this));
    const handleFullscreenChange1 = $2SSWc$classPrivateMethodGet(this, _handleFullscreenChange, handleFullscreenChange).bind(this);
    document.addEventListener('fullscreenchange', handleFullscreenChange1);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange1);
}
function cloneTemplate() {
    const fallbackToQS = (value, selector)=>value || this.querySelector(selector)
    ;
    const selectors = [
        `template[${$72c97a76bd96a08c$export$2e2bcd8739ae039.behaviors.TEMPLATE}]`,
        'template', 
    ];
    /** @type {HTMLTemplateElement} */ const template = selectors.reduce(fallbackToQS, null);
    if (!template) return;
    template.replaceWith(template.content.cloneNode(true));
}
function handleClick(event) {
    const customSelector = `[${$72c97a76bd96a08c$export$2e2bcd8739ae039.behaviors.TRIGGER}]`;
    const hasCustomTrigger = Boolean(this.querySelector(customSelector));
    const toggleEl = event.target.closest(hasCustomTrigger ? customSelector : 'button');
    if (toggleEl) {
        event.preventDefault();
        this.dispatchEvent(new $eeba32eb0d9f6ecd$export$2e2bcd8739ae039());
    }
}
function handleFullscreenChange() {
    const isFullscreen = Boolean($fd0806085991f6b5$export$2e2bcd8739ae039.element);
    if (isFullscreen) this.setAttribute('active', '');
    else this.removeAttribute('active');
}



customElements.define($0d50885bd7cdc9b8$export$2e2bcd8739ae039.tagName, $0d50885bd7cdc9b8$export$2e2bcd8739ae039);
customElements.define($72c97a76bd96a08c$export$2e2bcd8739ae039.tagName, $72c97a76bd96a08c$export$2e2bcd8739ae039);


export {$0d50885bd7cdc9b8$export$2e2bcd8739ae039 as FullScreenElement, $72c97a76bd96a08c$export$2e2bcd8739ae039 as FullScreenToggleElement, $eeba32eb0d9f6ecd$export$2e2bcd8739ae039 as FullScreenToggleEvent};
//# sourceMappingURL=module.js.map
