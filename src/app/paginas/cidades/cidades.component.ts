import { Component, OnInit } from '@angular/core';
import { cidades } from 'src/app/dados/cidades';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  resultado = cidades

  constructor() { }

  ngOnInit(): void {
  }

}
