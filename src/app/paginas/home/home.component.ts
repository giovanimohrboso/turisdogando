import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from 'src/app/modelos/cidade'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // resultado_destaque = cidades.filter(article => article.destaque == true)

  urlToJson = 'assets/dados/cidades.json';
  public resultado:any = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCidades().subscribe(response => {
      this.resultado = response;
      this.resultado.cidades = this.resultado.cidades.filter((article: { destaque: boolean; }) => article.destaque == true);
    });
  }

  getCidades():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.urlToJson)
  }

}
