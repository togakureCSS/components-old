import { html } from 'lit-html';

import '@togakure/styles/lib/css/06-components/tag.css';
import styles from '@togakure/styles/lib/js/styles';

const Tag = ({ text, styleType, onClick }) => {
  return html`
    <span
      class=${['tag', styles.tag[styleType]].join(' ')}
      @click=${onClick}
    >
      ${text}
    </span>
  `;
};

export default Tag;