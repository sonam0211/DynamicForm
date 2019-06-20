import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormTexareaComponent } from '../components/form-texarea/form-texarea.component';
import { FormButtonComponent } from '../components/form-button/form-button.component';
import { DynamicFieldDirective } from '../components/dynamic-field.directive';
import { FormRadioComponent } from '../components/form-radio/form-radio.component';
import { FormCheckboxComponent } from '../components/form-checkbox/form-checkbox.component';

@NgModule({
  declarations: [
    ContainerComponent,
    FormInputComponent,
    FormTexareaComponent,
    FormButtonComponent,
    DynamicFieldDirective,
    FormRadioComponent,
    FormCheckboxComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ContainerComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormTexareaComponent,
    FormRadioComponent,
    FormCheckboxComponent
  ]
})
export class ToolbarModule {}
