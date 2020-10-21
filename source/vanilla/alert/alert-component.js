import { html } from 'lit-html';

import '@togakure/styles/lib/css/06-components/alert.css';
import styles from '@togakure/styles/lib/js/styles';

const Alert = ({ text, styleType, onClick }) => {
  return html`
    <span
      class=${['alert', styles.alert[styleType]].join(' ')}
      @click=${onClick}
    >
      ${text}
    </span>
  `;
};

export default Alert;