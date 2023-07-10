var $k52p8$swchelpers = require("@swc/helpers");
var $k52p8$regeneratorruntime = require("regenerator-runtime");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "FullScreenElement", function () { return $f7af69084d67aeff$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "FullScreenToggleElement", function () { return $27da1b11015cdc7c$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "FullScreenToggleEvent", function () { return $7aabbee43d77697a$export$2e2bcd8739ae039; });



var $7aabbee43d77697a$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Event) {
    "use strict";
    $k52p8$swchelpers.inherits($7aabbee43d77697a$export$2e2bcd8739ae039, Event);
    var _super = $k52p8$swchelpers.createSuper($7aabbee43d77697a$export$2e2bcd8739ae039);
    function $7aabbee43d77697a$export$2e2bcd8739ae039() {
        $k52p8$swchelpers.classCallCheck(this, $7aabbee43d77697a$export$2e2bcd8739ae039);
        return _super.call(this, $7aabbee43d77697a$export$2e2bcd8739ae039.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return $7aabbee43d77697a$export$2e2bcd8739ae039;
}($k52p8$swchelpers.wrapNativeSuper(Event));
$k52p8$swchelpers.defineProperty($7aabbee43d77697a$export$2e2bcd8739ae039, "eventName", 'full-screen-toggle');




function $77c7e3cc05fe8a7b$export$2e2bcd8739ae039(el) {
    return _requestFullscreen.apply(this, arguments);
}
function _requestFullscreen() {
    _requestFullscreen = $k52p8$swchelpers.asyncToGenerator(($parcel$interopDefault($k52p8$regeneratorruntime)).mark(function _callee(el) {
        return ($parcel$interopDefault($k52p8$regeneratorruntime)).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    if (!('requestFullscreen' in el)) {
                        _ctx.next = 4;
                        break;
                    }
                    return _ctx.abrupt("return", el.requestFullscreen({
                        navigationUI: 'hide'
                    }));
                case 4:
                    if (!('webkitRequestFullscreen' in el)) {
                        _ctx.next = 6;
                        break;
                    }
                    return _ctx.abrupt("return", el.webkitRequestFullscreen({
                        navigationUI: 'hide'
                    }));
                case 6:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return _requestFullscreen.apply(this, arguments);
}


function $05b9d84a38756c60$export$2e2bcd8739ae039() {
    if ('exitFullscreen' in document) return document.exitFullscreen();
    else if ('webkitExitFullscreen' in document) return document.webkitExitFullscreen();
}


var $86357066f1bb778f$export$2e2bcd8739ae039 = {
    get enabled () {
        return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    },
    /**
   * @returns {Element}
   */ get element () {
        return document.fullscreenElement || document.webkitFullscreenElement;
    },
    requestFullscreen: $77c7e3cc05fe8a7b$export$2e2bcd8739ae039,
    exitFullscreen: $05b9d84a38756c60$export$2e2bcd8739ae039
};


var $f7af69084d67aeff$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $k52p8$swchelpers.inherits($f7af69084d67aeff$export$2e2bcd8739ae039, HTMLElement);
    var _super = $k52p8$swchelpers.createSuper($f7af69084d67aeff$export$2e2bcd8739ae039);
    function $f7af69084d67aeff$export$2e2bcd8739ae039() {
        $k52p8$swchelpers.classCallCheck(this, $f7af69084d67aeff$export$2e2bcd8739ae039);
        return _super.apply(this, arguments);
    }
    $k52p8$swchelpers.createClass($f7af69084d67aeff$export$2e2bcd8739ae039, [
        {
            key: "toggle",
            value: /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ function toggle() {
                var _this = this;
                return $k52p8$swchelpers.asyncToGenerator(($parcel$interopDefault($k52p8$regeneratorruntime)).mark(function _callee() {
                    var element, exitFullscreen, requestFullscreen;
                    return ($parcel$interopDefault($k52p8$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                element = $86357066f1bb778f$export$2e2bcd8739ae039.element, exitFullscreen = $86357066f1bb778f$export$2e2bcd8739ae039.exitFullscreen, requestFullscreen = $86357066f1bb778f$export$2e2bcd8739ae039.requestFullscreen;
                                if (!(element === _this)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                return _ctx.abrupt("return", exitFullscreen());
                            case 3:
                                return _ctx.abrupt("return", requestFullscreen(_this));
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                this.addEventListener($7aabbee43d77697a$export$2e2bcd8739ae039.eventName, function() {
                    return _this.toggle();
                });
            }
        }
    ]);
    return $f7af69084d67aeff$export$2e2bcd8739ae039;
}($k52p8$swchelpers.wrapNativeSuper(HTMLElement));
$k52p8$swchelpers.defineProperty($f7af69084d67aeff$export$2e2bcd8739ae039, "tagName", 'full-screen');





var /**
   * @param {MouseEvent} event
   */ _handleClick = /*#__PURE__*/ new WeakSet(), /**
   * @param {Element} el
   * @returns {boolean}
   */ _elementHasBehavior = /*#__PURE__*/ new WeakSet(), /**
   * @returns {void}
   */ _handleFullscreenChange = /*#__PURE__*/ new WeakSet();
var $27da1b11015cdc7c$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $k52p8$swchelpers.inherits($27da1b11015cdc7c$export$2e2bcd8739ae039, HTMLElement);
    var _super = $k52p8$swchelpers.createSuper($27da1b11015cdc7c$export$2e2bcd8739ae039);
    function $27da1b11015cdc7c$export$2e2bcd8739ae039() {
        $k52p8$swchelpers.classCallCheck(this, $27da1b11015cdc7c$export$2e2bcd8739ae039);
        var _this;
        _this = _super.apply(this, arguments);
        $k52p8$swchelpers.classPrivateMethodInit($k52p8$swchelpers.assertThisInitialized(_this), _handleClick);
        $k52p8$swchelpers.classPrivateMethodInit($k52p8$swchelpers.assertThisInitialized(_this), _elementHasBehavior);
        $k52p8$swchelpers.classPrivateMethodInit($k52p8$swchelpers.assertThisInitialized(_this), _handleFullscreenChange);
        return _this;
    }
    $k52p8$swchelpers.createClass($27da1b11015cdc7c$export$2e2bcd8739ae039, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                if ($86357066f1bb778f$export$2e2bcd8739ae039.enabled) this.setAttribute('supported', '');
                this.attachShadow({
                    mode: 'open'
                });
                if (this.shadowRoot) {
                    var ref;
                    this.shadowRoot.innerHTML = "\n        <slot><button type=\"button\">Toggle Fullscreen</button></slot>\n      ";
                    (ref = this.shadowRoot.querySelector('slot')) === null || ref === void 0 ? void 0 : ref.addEventListener('click', $k52p8$swchelpers.classPrivateMethodGet(this, _handleClick, handleClick).bind(this));
                }
                var _$handleFullscreenChange = $k52p8$swchelpers.classPrivateMethodGet(this, _handleFullscreenChange, handleFullscreenChange).bind(this);
                document.addEventListener('fullscreenchange', _$handleFullscreenChange);
                document.addEventListener('webkitfullscreenchange', _$handleFullscreenChange);
            }
        },
        {
            key: "active",
            get: /**
   * @returns {boolean}
   */ function get() {
                return this.hasAttribute('active');
            }
        },
        {
            key: "supported",
            get: /**
   * @returns {boolean}
   */ function get() {
                return this.hasAttribute('supported');
            }
        }
    ]);
    return $27da1b11015cdc7c$export$2e2bcd8739ae039;
}($k52p8$swchelpers.wrapNativeSuper(HTMLElement));
/**
   * @readonly
   */ $k52p8$swchelpers.defineProperty($27da1b11015cdc7c$export$2e2bcd8739ae039, "tagName", 'full-screen-toggle');
/**
   * @readonly
   */ $k52p8$swchelpers.defineProperty($27da1b11015cdc7c$export$2e2bcd8739ae039, "behaviors", {
    TOGGLE: 'toggle',
    ENTER: 'enter',
    EXIT: 'exit'
});
function handleClick(event) {
    var _behaviors = $27da1b11015cdc7c$export$2e2bcd8739ae039.behaviors, TOGGLE = _behaviors.TOGGLE, ENTER = _behaviors.ENTER, EXIT = _behaviors.EXIT;
    if ($k52p8$swchelpers.classPrivateMethodGet(this, _elementHasBehavior, elementHasBehavior).call(this, event.target)) {
        var _dataset = event.target.dataset, _behavior = _dataset.behavior, behavior = _behavior === void 0 ? TOGGLE : _behavior;
        if (this.active && behavior === ENTER || !this.active && behavior === EXIT) return;
        event.preventDefault();
        this.dispatchEvent(new $7aabbee43d77697a$export$2e2bcd8739ae039());
    }
}
function elementHasBehavior(el) {
    var ref;
    var _behaviors = $27da1b11015cdc7c$export$2e2bcd8739ae039.behaviors, TOGGLE = _behaviors.TOGGLE, ENTER = _behaviors.ENTER, EXIT = _behaviors.EXIT;
    var behaviorSelector = "[data-behavior=\"".concat(TOGGLE, "\"], [data-behavior=\"").concat(ENTER, "\"], [data-behavior=\"").concat(EXIT, "\"]");
    var behaviorsArePresent = this.querySelector(behaviorSelector);
    if (behaviorsArePresent) return Boolean(el === null || el === void 0 ? void 0 : el.closest(behaviorSelector));
    return el === this.querySelector('button') || el === ((ref = this.shadowRoot) === null || ref === void 0 ? void 0 : ref.querySelector('button'));
}
function handleFullscreenChange() {
    var isFullscreen = Boolean($86357066f1bb778f$export$2e2bcd8739ae039.element);
    if (isFullscreen) this.setAttribute('active', '');
    else this.removeAttribute('active');
}



customElements.define($f7af69084d67aeff$export$2e2bcd8739ae039.tagName, $f7af69084d67aeff$export$2e2bcd8739ae039);
customElements.define($27da1b11015cdc7c$export$2e2bcd8739ae039.tagName, $27da1b11015cdc7c$export$2e2bcd8739ae039);


//# sourceMappingURL=common.js.map
