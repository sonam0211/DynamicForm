import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  form: FormGroup;
  @Input() config = [];
  @Input() removeComponent: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  get controls() {
    return this.config.filter(({ type }) => type !== 'button');
  }

  remove(i) {
    this.removeComponent(i);
  }
  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.fb.control(control.name)));
    return group;
  }
}
