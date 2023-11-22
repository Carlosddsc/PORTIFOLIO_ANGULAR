// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    div {
      text-align: center;
      margin: 50px;
    }

    h2 {
      color: #333;
    }

    img {
      max-width: 100%;
      border-radius: 50%;
      margin-top: 10px;
    }

    p {
      color: #666;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }

    button:hover {
      background-color: #0056b3;
    }
  `],
})
export class HomeComponent {
  nome = 'Carlos Daniel de Souza Camargo';
  fotoUrl = '/Users/carlosdaniel/Desktop/Captura de Tela 2023-11-22 às 01.06.01.png';
  contato = 'Carlosddsc15@icloud.com | (42) 99802-6798';

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
