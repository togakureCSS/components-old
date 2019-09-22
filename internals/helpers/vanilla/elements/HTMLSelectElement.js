class HTMLSelectElement extends HTMLElement {
  get name () {
    return this.getAttribute('name');
  }

  set name (val) {
    this.setAttribute('name',val);
  }

  get options () {
    return this.querySelectorAll('option');
  }

  get _selectedOption () {
    return this.options.find(option => option.selected) || this.options[0];
  }

  get value () {
    return this._selectedOption ? this._selectedOption.value : '';
  }
}

export default HTMLSelectElement;
