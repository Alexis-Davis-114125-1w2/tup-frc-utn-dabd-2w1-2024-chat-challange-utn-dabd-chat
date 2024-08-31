import { Component } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [Comp1Component, CommonModule],
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  user1 = 'Pepe';
  user2 = 'María';

  messages: { user: string, text: string }[] = [];

  addMessage(newMessage: { user: string, text: string }) {
    this.messages.push(newMessage);
  }
}