import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'data-list-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() name = '';
  @Input() label = '';
  @Input() value = '342';
  @Output() emitter = new EventEmitter();

  onChange(value: string) {
    this.emitter.emit({event: 'FieldComponent:VALUE_CHANGED', data: value})
  }
}
