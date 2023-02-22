import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /* Vars */

  public readonly title: string = "Bem-vindo ao Espaço La Torre!";

  public readonly text: string = "O La Torre é um espaço que possui mais de 10 anos de existência, com capacidade para até 180 convidados distribuídos em dois andares. Oferecemos: ar condicionado e ventiladores, mesas e cadeiras estofadas em ferro, cozinha ampla, churrasqueira, terraço, fraldário e vaga para 2 carros na porta..";

  public readonly image: string = "assets/img/image3.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
