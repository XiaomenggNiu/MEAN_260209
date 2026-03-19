import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from './highlight';

@Component({
  selector: 'app-directives-intro',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './directives-intro.html',
  styleUrl: './directives-intro.scss',
})
export class DirectivesIntro {
  condition: boolean = false;
  arr = [
    {name: 'Miranda', email:'abc@c.com'},
    {name: 'Peter', email:'abc@b.com'},
    {name: 'Alice', email:'abc@a.com'}
  ]
  role: "admin" | "user" = 'admin';

  textColor = 'red';
  yellow = 'yellow';
  blue = 'blue';
}
