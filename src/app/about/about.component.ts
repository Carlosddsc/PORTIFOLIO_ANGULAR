import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  fotos: string[] = [
    'url_da_foto1.jpg',
  ];

  cidadeNascimento: string = '';
  dataNascimento: string = '';
  idade: number = 21; // Sua idade atual

  futuro: string = 'Sobre o Futuro...';
  hobbies: string = 'Meus Hobbies...';
  midiasSociais: string[] = ['Instagram', 'Twitter', 'LinkedIn'];
}
