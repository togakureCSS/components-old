import { Component, EventEmitter, Input, Output } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-button',
  template: `
    <button
      (click)="onClick.emit($event)"
      type="{{type || 'button'}}"
      [ngClass]="classes"
    >
    {{ text }}
    </button>
  `,
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/button.css']
})

export default class ButtonComponent {
  @Input()
  className: string;
  
  @Input()
  style: string;
  
  @Input()
  type: string;
  
  @Input()
  text: string;
  
  @Input()
  size: string;
  
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = styles.button[this.style];

    return [styles.button[this.size], mode];
  }
};
