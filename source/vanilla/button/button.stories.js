import { storiesOf } from '@storybook/html';

import Button from "./button-component";

const stories = storiesOf('Button', module);

stories.add('default', () => (
  new Button()
));
