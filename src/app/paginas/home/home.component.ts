import { Component, OnInit } from '@angular/core';
import { cidades } from 'src/app/dados/cidades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultado_destaque = cidades.filter(article => article.destaque == true)

  constructor() { }

  ngOnInit(): void {
  }

}
