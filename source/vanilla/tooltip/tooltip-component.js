import { html } from 'lit-html';

import '@togakure/styles/lib/css/06-components/tooltip.css';
import styles from '@togakure/styles/lib/js/styles';

const Tooltip = ({ text, styleType, onClick }) => {
  return html`
    <span
      class=${['tooltip', styles.tooltip[styleType]].join(' ')}
      @click=${onClick}
    >
      ${text}
    </span>
  `;
};

export default Tooltip;