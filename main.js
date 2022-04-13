import { Select } from './select.js';

const container = document.createElement('div');
document.body.append(container);

new Select({
  container,
  options: ['По номеру', 'По балансу', 'По последней тразакции'],
  placeholder: {
    text: 'Сортировка',
    // static: true,
  },
  optionTransform: 'checked', // checked or hidden
});
