var $k52p8$swchelpers = require("@swc/helpers");
var $k52p8$regeneratorruntime = require("regenerator-runtime");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $6be4b30feeb09703$export$2e2bcd8739ae039; });




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


var /** @type {String} */ _target = /*#__PURE__*/ new WeakMap(), /**
   * @param {MouseEvent} event
   */ _handleClick = /*#__PURE__*/ new WeakSet(), /**
   * @returns {HTMLElement}
   */ _getTargetEl = /*#__PURE__*/ new WeakSet();
var $f7af69084d67aeff$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $k52p8$swchelpers.inherits($f7af69084d67aeff$export$2e2bcd8739ae039, HTMLElement);
    var _super = $k52p8$swchelpers.createSuper($f7af69084d67aeff$export$2e2bcd8739ae039);
    function $f7af69084d67aeff$export$2e2bcd8739ae039() {
        $k52p8$swchelpers.classCallCheck(this, $f7af69084d67aeff$export$2e2bcd8739ae039);
        var _this;
        _this = _super.apply(this, arguments);
        $k52p8$swchelpers.classPrivateMethodInit($k52p8$swchelpers.assertThisInitialized(_this), _handleClick);
        $k52p8$swchelpers.classPrivateMethodInit($k52p8$swchelpers.assertThisInitialized(_this), _getTargetEl);
        $k52p8$swchelpers.classPrivateFieldInit($k52p8$swchelpers.assertThisInitialized(_this), _target, {
            writable: true,
            value: null
        });
        return _this;
    }
    $k52p8$swchelpers.createClass($f7af69084d67aeff$export$2e2bcd8739ae039, [
        {
            key: "target",
            get: /**
   * ID of an element. If the ID is null, an empty string, or doesn't exist
   * in the same document or shadow root as this element, this element
   * will be the default target.
   */ function get() {
                return $k52p8$swchelpers.classPrivateFieldGet(this, _target) === null ? this.getAttribute('target') : $k52p8$swchelpers.classPrivateFieldGet(this, _target);
            },
            set: function set(value) {
                $k52p8$swchelpers.classPrivateFieldSet(this, _target, value.toString());
            }
        },
        {
            key: "toggle",
            value: /**
   * Toggles fullscreen on or off for the target element
   *
   * NOTE: This will fail unless called in the context of a user action
   */ function toggle() {
                var _this = this;
                return $k52p8$swchelpers.asyncToGenerator(($parcel$interopDefault($k52p8$regeneratorruntime)).mark(function _callee() {
                    var target;
                    return ($parcel$interopDefault($k52p8$regeneratorruntime)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                target = $k52p8$swchelpers.classPrivateMethodGet(_this, _getTargetEl, getTargetEl).call(_this);
                                if (!(document.fullscreenElement === target || document.webkitFullscreenElement === target)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                return _ctx.abrupt("return", $05b9d84a38756c60$export$2e2bcd8739ae039());
                            case 3:
                                return _ctx.abrupt("return", $77c7e3cc05fe8a7b$export$2e2bcd8739ae039(target));
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
                this.addEventListener('click', $k52p8$swchelpers.classPrivateMethodGet(this, _handleClick, handleClick).bind(this));
                if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
                    /** @type {HTMLTemplateElement} */ var template = this.querySelector("template[data-behavior=\"".concat($f7af69084d67aeff$export$2e2bcd8739ae039.behaviors.TEMPLATE, "\"]"));
                    if (template) template.replaceWith(template.content.cloneNode(true));
                }
                this.attachShadow({
                    mode: 'open'
                }).innerHTML = "\n      <slot></slot>\n\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n    ";
            }
        }
    ]);
    return $f7af69084d67aeff$export$2e2bcd8739ae039;
}($k52p8$swchelpers.wrapNativeSuper(HTMLElement));
$k52p8$swchelpers.defineProperty($f7af69084d67aeff$export$2e2bcd8739ae039, "tagName", 'full-screen');
$k52p8$swchelpers.defineProperty($f7af69084d67aeff$export$2e2bcd8739ae039, "behaviors", {
    TOGGLE: 'full-screen-toggle',
    TEMPLATE: 'full-screen-template'
});
function handleClick(event) {
    var toggleEl = event.target.closest("[data-behavior=\"".concat($f7af69084d67aeff$export$2e2bcd8739ae039.behaviors.TOGGLE, "\"]"));
    if (toggleEl) {
        event.preventDefault();
        this.toggle();
    }
}
function getTargetEl() {
    var idTarget = this.target && this.getRootNode().getElementById(this.target);
    return idTarget || this;
}


customElements.define($f7af69084d67aeff$export$2e2bcd8739ae039.tagName, $f7af69084d67aeff$export$2e2bcd8739ae039);
var $6be4b30feeb09703$export$2e2bcd8739ae039 = $f7af69084d67aeff$export$2e2bcd8739ae039;


//# sourceMappingURL=common.js.map
