import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Cidade, Fotos } from 'src/app/modelos/cidade';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  urlToJson = 'assets/dados/cidades.json';
  public resultado:any = []

  nome:string | any=""
  descricao1:string | any=""
  descricao2:string | any=""
  descricao3:string | any=""
  descricao4:string | any=""
  data:string | any=""

  resultado_cidade:Cidade | undefined;
  resultado_detalhes:Fotos[]=[];

  constructor(public http: HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(value =>
      this.nome = (value.get("nome"))
    )

    this.setValuesComponent(this.nome)
  }

  setValuesComponent(nome:string):void{
    this.getCidades().subscribe(response => {
      this.resultado = response;
      this.resultado.cidades = this.resultado.cidades.filter((article: { nome: { toString: () => string | null; }; }) => article.nome.toString() == this.nome);

      this.resultado_cidade = this.resultado.cidades[0].nomenome
      this.descricao1 = this.resultado.cidades[0].descricao1
      this.descricao2 = this.resultado.cidades[0].descricao2
      this.descricao3 = this.resultado.cidades[0].descricao3
      this.descricao4 = this.resultado.cidades[0].descricao4
      this.data = this.resultado.cidades[0].data
      this.resultado_detalhes = this.resultado.cidades[0].fotos
    });

    
  }

  getCidades():Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.urlToJson)
  }

}
