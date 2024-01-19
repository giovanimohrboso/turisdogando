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
  descricao1:string | any=""
  descricao2:string | any=""
  descricao3:string | any=""
  descricao4:string | any=""
  data:string | any=""

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
      this.descricao1 = resultado.descricao1
      this.descricao2 = resultado.descricao2
      this.descricao3 = resultado.descricao3
      this.descricao4 = resultado.descricao4
      this.data = resultado.data

      this.resultado_foto = cidades_fotos.filter(article => article.nome.toString() == this.nome)

  }

}
