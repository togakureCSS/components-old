import HTMLFormControlsCollection from "../HTMLFormControlsCollection";

class HTMLFormElement extends HTMLElement {
  submit () {
    const event = this.ownerDocument.createEvent('Event');
    event.initEvent('submit', true, true);
    this.dispatchEvent(event);
  }

  get elements () {
    const elements = new HTMLFormControlsCollection();
    this._getElementsRecursive(this,elements);
    return elements;
  }

  _getElementsRecursive (parent,elements) {
    for(const child of parent.children) {
      if(['input','button','textarea','select'].includes(child.tagName.toLowerCase())) {
        elements._add(child);
      }
      this._getElementsRecursive(child,elements);
    }
  }
}

export default HTMLFormElement;
