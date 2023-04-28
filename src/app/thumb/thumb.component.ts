import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thumb',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css'],
})
export class ThumbComponent {
  @Input() total: string | number = 0;
  @Input() title = '';
}
