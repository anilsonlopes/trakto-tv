import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() action = null as null | {
    text: string;
    to: string;
    target: string;
  };
}
