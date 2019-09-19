import { storiesOf } from '@storybook/html';

import Button from "./button-component";

const stories = storiesOf('Button', module);

stories.add('with text', () => (
  new Button()
));
