import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public config: any[] = [
    {
      type: 'input',
      label: 'Input text box',
      name: 'inputbox',
      placeholder: 'Enter your text here'
    },
    {
      type: 'textarea',
      label: 'Input text area',
      name: 'textareabox',
      placeholder: 'Enter your description here'
    },
    {
      type: 'radio',
      label: 'Radio Button',
      name: 'radiobox',
      options: [{ key: 'm', label: 'Option1' }, { key: 'f', label: 'Option2' }]
    },
    {
      type: 'checkbox',
      name: 'checkbox',
      label: 'Checkbox'
    },
    {
      label: 'Submit',
      type: 'button',
      name: 'submit'
    }
  ];

  addInput() {
    this.config.push({
      type: 'input',
      label: 'Input text box',
      name: 'inputbox',
      placeholder: 'Enter your text here'
    });
  }

  addTextArea() {
    this.config.push({
      type: 'textarea',
      label: 'Input text area',
      name: 'textareabox',
      placeholder: 'Enter your description here'
    });
  }

  addRadio() {
    this.config.push({
      type: 'radio',
      label: 'Radio Button',
      name: 'radiobox',
      options: [{ key: 'm', label: 'Option1' }, { key: 'f', label: 'Option2' }]
    });
  }

  addCheckbox() {
    this.config.push({
      type: 'checkbox',
      name: 'checkbox',
      label: 'Checkbox'
    });
  }

  addButton() {
    this.config.push({
      label: 'Submit',
      type: 'button',
      name: 'submit'
    });
  }

  removeComponent(i) {
    this.config.splice(i, 1);
  }
  reset() {
    this.config = [];
  }
}
