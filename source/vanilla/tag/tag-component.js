(function() {
  const currentDocument = document.currentScript.ownerDocument;

  const togakure = window.TOGAKURE || {};
  const classes = togakure.styles ? togakure.styles.tag : {};

  class Tag extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#tag-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      const styleType = this.getAttribute('styleType');

      this.render({ text, styleType, size });
    }

    render(props) {
      const $tag = this.shadowRoot.querySelector('.tag');

      $tag.classList.add(classes[props.styleType]);
    }
  }

  customElements.define('tog-tag', Tag);
})();
