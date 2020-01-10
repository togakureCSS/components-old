import { Component, OnInit } from '@angular/core';
import { styles } from '@togakure/styles';

@Component({
  selector: 'tog-tag',
  templateUrl: './tag-component.html',
  styleUrls: ['../../../node_modules/@togakure/styles/lib/css/06-components/tag.css']
})

export class TagComponent implements OnInit {
  classes: object;

  constructor() {
    this.classes = styles.tag;
  }

  ngOnInit() {}

  getStyle(style) {
    const styleName = this.classes[style] || this.classes['default'];
    return `${styleName}`;
  }
};
