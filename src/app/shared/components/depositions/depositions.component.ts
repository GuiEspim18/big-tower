import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.scss']
})
export class DepositionsComponent implements OnInit {

  /* Vars */

  public readonly cardText: string = '"Tive um dia incrível, o espaço La Torre nos proporcionou a melhor festa de nossas vidas.  Agradeço muito a Andréa e Sr. Wanderley sempre muitos atenciosos conosco e prestativos nos deixaram a vontade com alguns fornecedores e com uma ótima estrutura nosso dia foi perfeito e maravilho. Nossos convidados se sentiram super a vontade com o lugar amplo e espaçoso e um terraço lindo não poderia ser melhor. Obrigado a vocês por esse trabalho honesto que fazem." -Maria Clara Almeida ';

  public readonly cardTitle: string = "Nossos Clientes";


  constructor() { }

  ngOnInit(): void {
  }

}
