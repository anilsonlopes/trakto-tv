import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() modulos = [
    {
      to: '/material',
      label: 'Material didático',
      image: '/assets/image/modulo-material.png',
    },
    {
      to: '/',
      label: 'Quiz',
      image: '/assets/image/modulo-quiz.png',
    },
    {
      to: '/desenho',
      label: 'Desenho',
      image: '/assets/image/modulo-desenho.png',
    },
    {
      to: '/',
      label: 'Youtube',
      image: '/assets/image/modulo-youtube.png',
    },
  ];
}
