import HTMLFormElement from "./HTMLFormElement";

class HTMLButtonElement extends HTMLElement {
  get name () {
    return this.getAttribute('name');
  }

  set name (val) {
    this.setAttribute('name',val);
  }

  click () {
    const event = this.ownerDocument.createEvent('Event');
    event.initEvent('click', true, true);
    this.dispatchEvent(event);
    if(!event.defaultPrevented) {
      // submit a form if it is in one
      const form = this.getAnscestorForm(this);
      if(form) {
        form.submit();
      }
    }
  }

  getAnscestorForm (child) {
    if(child instanceof HTMLFormElement) {
      return child;
    }
    if(child.parentNode) {
      return this.getAnscestorForm(child.parentNode);
    }
  }
}

export default HTMLButtonElement;
