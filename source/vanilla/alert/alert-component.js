(function() {
  const currentDocument = document.currentScript.ownerDocument;

  const togakure = window.TOGAKURE || {};
  const classes = togakure.styles ? togakure.styles.alert : {};

  class Alert extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#alert-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      const styleType = this.getAttribute('styleType');

      this.render({ text, styleType, size });
    }

    render(props) {
      const $alert = this.shadowRoot.querySelector('.alert');

      $alert.classList.add(classes[props.styleType]);
    }
  }

  customElements.define('tog-alert', Alert);
})();
