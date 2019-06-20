import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTexareaComponent } from './form-texarea/form-texarea.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

const components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  textarea: FormTexareaComponent,
  radio: FormRadioComponent,
  checkbox: FormCheckboxComponent
};
@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;

  @Input() group: FormGroup;
  component;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}
  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
