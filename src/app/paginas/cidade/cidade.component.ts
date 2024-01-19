import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cidades, cidades_fotos } from 'src/app/dados/cidades';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  nome:string | null=""
  descricao:string=""

  resultado_foto:any[]=[]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.nome = (value.get("nome"))
    )
    this.setValuesComponent(this.nome)
  }

  setValuesComponent(nome:string| null):void{
    const resultado = cidades.filter(article => article.nome.toString() == nome)[0]
      this.nome = resultado.nome
      this.descricao = resultado.descricao

      this.resultado_foto = cidades_fotos.filter(article => article.nome.toString() == this.nome)

  }

}
