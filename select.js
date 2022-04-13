export class Select {
  constructor({
    container,
    options,
    placeholder = { static: false },
    optionTransform = null,
  }) {
    this.container = container;
    this.options = options;
    this.placeholder = placeholder;
    this.optionTransform = optionTransform;

    this.renderSelect();
  }

  renderSelect() {
    this.select = document.createElement('div');
    this.select.classList.add('select');

    this.select.append(this.renderHeader(), this.renderBody());
    this.container.append(this.select);

    if (this.placeholder.static) {
      this.header.innerText = this.placeholder.text;
    } else {
      this.header.innerText = this.options[0];
      this.optionTransformHidden(this.options[0]);
    }

    this.calculateBodyHeight();
    this.click();
  }

  renderHeader() {
    this.header = document.createElement('div');
    this.header.classList.add('select__header');

    this.header.dataset.open = 'no';

    return this.header;
  }

  renderBody() {
    this.body = document.createElement('ul');
    this.body.classList.add('select__body');

    this.renderOptions();

    return this.body;
  }

  renderOptions() {
    this.options.forEach(optionText => {
      const optionElement = document.createElement('li');
      optionElement.classList.add('select__option');
      optionElement.innerText = optionText;

      this.body.append(optionElement);
    });
  }

  calculateBodyHeight() {
    this.bodyOffsetHeight = this.body.offsetHeight;
    this.body.style.height = '0';
  }

  click() {
    this.select.addEventListener('click', e => {
      if (e.target === this.header) {
        this.header.dataset.open === 'no' ? this.listOpen() : this.listClose();
      }

      if (e.target.classList.contains('select__option')) {
        this.optionTransformChecked(e.target);
        this.optionTransformHidden(e.target.innerText);

        if (!this.placeholder.static) {
          this.header.innerText = e.target.innerText;
        }
      }
    });

    document.body.addEventListener('click', e => {
      e.target !== this.header && this.listClose();
    });
  }

  listOpen() {
    this.body.style.opacity = '1';
    this.header.dataset.open = 'yes';
    this.body.style.height = this.bodyOffsetHeight + 'px';
  }

  listClose() {
    this.header.dataset.open = 'no';
    this.body.style.height = '0';
    setTimeout(() => (this.body.style.opacity = '0'), 265);
  }

  optionTransformChecked(optionChecked) {
    if (this.optionTransform === 'checked') {
      this.body.childNodes.forEach(option => {
        option.classList.remove('select__checked');
      });

      optionChecked.classList.add('select__checked');
    }
  }

  optionTransformHidden(optionInnerText) {
    if (this.optionTransform === 'hidden') {
      this.body.childNodes.forEach(option => {
        option.innerText === optionInnerText
          ? (option.style.display = 'none')
          : (option.style.display = '');
      });
    }
  }
}
