class HTMLFormControlsCollection extends Array {
  constructor (...elements) {
    super(...elements);
  }

  namedItem (name) {
    return this[name];
  }

  _add (element) {
    this.push(element);

    const name = element.name;
    if(name) {
      if(this[name] instanceof HTMLElement) {
        this[name] = [this[name],element];
      }
      else if(this[name] instanceof Array) {
        this[name].push(element);
      }
      else {
        this[name] = element;
      }
    }
  }
}

export default HTMLFormControlsCollection;
