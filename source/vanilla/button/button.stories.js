import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

const stories = storiesOf('Button', module);

stories.add('with text', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  }
);
