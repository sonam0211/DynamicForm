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
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule
  ],
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
