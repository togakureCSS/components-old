import { html } from 'lit-html';

import '@togakure/styles/lib/css/06-components/breadcrumb.css';
import styles from '@togakure/styles/lib/js/styles';

const Breadcrumb = ({ text, styleType, onClick }) => {
  return html`
    <span
      class=${['breadcrumb', styles.breadcrumb[styleType]].join(' ')}
      @click=${onClick}
    >
      ${text}
    </span>
  `;
};

export default Breadcrumb;