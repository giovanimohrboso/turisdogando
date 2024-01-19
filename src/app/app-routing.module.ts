import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { CidadesComponent } from './paginas/cidades/cidades.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { DicasComponent } from './paginas/dicas/dicas.component';
import { CidadeComponent } from './paginas/cidade/cidade.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cidades',
    component:CidadesComponent
  },
  {
    path:'cidades/:nome',
    component:CidadeComponent
  },
  {
    path:'mapa',
    component:MapaComponent
  },
  {
    path:'dicas',
    component:DicasComponent
  },
  {
    path:'contato',
    component:ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
