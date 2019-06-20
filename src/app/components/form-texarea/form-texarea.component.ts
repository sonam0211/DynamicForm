import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-texarea',
  templateUrl: './form-texarea.component.html',
  styleUrls: ['./form-texarea.component.css']
})
export class FormTexareaComponent {
  config;
  group: FormGroup;
}
