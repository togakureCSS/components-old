class HTMLInputElement extends HTMLElement {
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
    return this.getAttribute('value');
  }
}

export default HTMLInputElement;
