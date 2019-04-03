import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { styles } from '@descco/ui-core';

@Component({
  selector: 'ui-button',
  templateUrl: './button-component.html',
  styleUrls: ['../../../node_modules/@descco/ui-core/lib/css/06-components/button.css']
})

export class ButtonComponent implements OnInit {
  classes: object;
  @Input() className: string;
  @Input() style: string;
  @Input() type: string;
  @Input() text: string;
  @Input() size: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.classes = styles.button;
  }

  ngOnInit() {}

  getStyle(style, size) {
    const styleName = this.classes[style] || this.classes['default'];
    const sizeName = this.classes[size] || this.classes['medium'];
    return `${styleName} ${sizeName}`;
  }

  handleClick(event: any) {
    this.onClick.emit(event);
  }
};
