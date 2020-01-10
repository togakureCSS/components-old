(function() {
  const currentDocument = document.currentScript.ownerDocument;

  const togakure = window.TOGAKURE || {};
  const classes = togakure.styles ? togakure.styles.tooltip : {};

  class Tooltip extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#tooltip-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      const styleType = this.getAttribute('styleType');

      this.render({ text, styleType, size });
    }

    render(props) {
      const $tooltip = this.shadowRoot.querySelector('.tooltip');

      $tooltip.classList.add(classes[props.styleType]);
    }
  }

  customElements.define('tog-tooltip', Tooltip);
})();
