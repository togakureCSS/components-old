(function () {
  const currentDocument = document.currentScript.ownerDocument;

  const togakure = window.TOGAKURE || {};
  const classes = togakure.styles ? togakure.styles.button : {};

  console.log(window.TOGAKURE);

  class Button extends HTMLElement {
    constructor() {
      super();

      this.addEventListener('click', e => {
        this.buttonClick();
      });
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = currentDocument.querySelector('#button-template');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      const text = this.getAttribute('text');
      const styleType = this.getAttribute('styleType');
      const size = this.getAttribute('size');

      this.render({ text, styleType, size });
    }

    buttonClick() {
      console.log('click');
    }

    render(props) {
      const $button = this.shadowRoot.querySelector('.button');

      $button.innerText = props.text;
      $button.classList.add(classes[props.styleType], classes[props.size]);
    }
  }

  customElements.define('tog-button', Button);
})();
