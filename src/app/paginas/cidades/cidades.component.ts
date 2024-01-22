import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from 'src/app/modelos/cidade'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  urlToJson = 'assets/dados/cidades.json';

  public resultado:any = []

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.getCidades().subscribe(response => {
      this.resultado = response;
    });
  }

  getCidades():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.urlToJson)
  }

}
