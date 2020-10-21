import { html } from 'lit-html';

import '@togakure/styles/lib/css/06-components/button.css';
import styles from '@togakure/styles/lib/js/styles';

const Button = ({ text, styleType, size, onClick }) => {
  return html`
    <button
      type="button"
      class=${[styles.button[styleType], styles.button[size]].join(' ')}
      @click=${onClick}
    >
      ${text}
    </button>
  `;
};

export default Button;
