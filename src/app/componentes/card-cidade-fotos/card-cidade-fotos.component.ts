import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cidade-fotos',
  templateUrl: './card-cidade-fotos.component.html',
  styleUrls: ['./card-cidade-fotos.component.css']
})
export class CardCidadeFotosComponent implements OnInit {
  @Input()
  descricao:string=""
  @Input()
  caminhoFoto:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
