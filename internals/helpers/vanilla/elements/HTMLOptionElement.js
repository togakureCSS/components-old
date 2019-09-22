import HTMLSelectElement from "./HTMLSelectElement";

class HTMLOptionElement extends HTMLElement {
  constructor () {
    super();
  }

  static get observedAttributes () {
    return ['selected'];
  }

  attributeChangedCallback (name,oldval,newVal) {
    if(newVal !== null) {
      const select = this.parentNode;
      if(select && select instanceof HTMLSelectElement) {
        for(const option of select.options) {
          if(option !== this) {
            option.selected = false;
          }
        }
      }
    }
  }

  get name () {
    return this.getAttribute('name');
  }

  set name (val) {
    this.setAttribute('name',val);
  }

  set value (val) {
    this.setAttribute('value',val);
  }

  get value () {
    return this.getAttribute('value') || '';
  }

  get selected () {
    return this.hasAttribute('selected');
  }

  set selected (val) {
    val ? this.setAttribute('selected','') : this.removeAttribute('selected');
  }
}

export default HTMLOptionElement;
