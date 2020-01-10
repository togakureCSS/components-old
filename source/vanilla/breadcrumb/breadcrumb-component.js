(function() {
  const currentDocument = document.currentScript.ownerDocument;

  const togakure = window.TOGAKURE || {};
  const classes = togakure.styles ? togakure.styles.breadcrumb : {};

  class Breadcrumb extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#breadcrumb-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      const styleType = this.getAttribute('styleType');

      this.render({ text, styleType, size });
    }

    render(props) {
      const $breadcrumb = this.shadowRoot.querySelector('.breadcrumb');

      $breadcrumb.classList.add(classes[props.styleType]);
    }
  }

  customElements.define('tog-breadcrumb', Breadcrumb);
})();
