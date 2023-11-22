import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  nome = 'Seu Nome';
  fotoUrl = 'caminho/para/sua/foto.jpg';
  contato = 'seu.email@example.com | (99) 9999-9999';

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
