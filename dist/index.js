(()=>{class t extends HTMLElement{static tagName="full-screen";#t=null;get target(){return null===this.#t?this.getAttribute("target"):this.#t}set target(t){this.#t=t.toString()}toggle(){const t=this.#e();return document.fullscreenElement===t?document.exitFullscreen():t.requestFullscreen({navigationUI:"hide"})}connectedCallback(){this.addEventListener("click",this.#l.bind(this))}#l(t){t.target.matches('[data-behavior="full-screen-toggle"')&&(t.preventDefault(),this.toggle())}#e(){return this.target&&this.getRootNode().getElementById(this.target)||this}}customElements.define(t.tagName,t)})();
//# sourceMappingURL=index.js.map
