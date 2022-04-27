import FullScreenElement from './FullscreenElement';
import FullScreenToggleElement from './FullScreenToggleElement';
import FullScreenToggleEvent from './FullScreenToggleEvent';

customElements.define(FullScreenElement.tagName, FullScreenElement);
customElements.define(FullScreenToggleElement.tagName, FullScreenToggleElement);

export { FullScreenElement, FullScreenToggleElement, FullScreenToggleEvent };
