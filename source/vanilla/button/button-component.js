import { window } from 'global';

class Button extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'closed'});
    shadowRoot.innerHTML = `
      <button>text</button>
    `;
  }
}

window.customElements.define("tog-button", Button);

export default Button;
