
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [CommonModule]
})
export class Comp1Component {
  @Input() user: string = '';
  message: string = '';

  @Output() messageSent = new EventEmitter<{ user: string, text: string }>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLTextAreaElement;
    this.message = inputElement.value;
  }

  sendMessage() {
    this.messageSent.emit({ user: this.user, text: this.message });
    this.message = '';
  }
}