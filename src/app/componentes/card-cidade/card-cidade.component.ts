import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cidade',
  templateUrl: './card-cidade.component.html',
  styleUrls: ['./card-cidade.component.css']
})
export class CardCidadeComponent implements OnInit {
  @Input()
  id:string=""
  @Input()
  nome:string=""
  @Input()
  caminhoFotoCapa:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
