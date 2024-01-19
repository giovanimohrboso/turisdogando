import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LinkExternoComponent } from './componentes/link-externo/link-externo.component';
import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { CidadesComponent } from './paginas/cidades/cidades.component';
import { MapaComponent } from './paginas/mapa/mapa.component';
import { DicasComponent } from './paginas/dicas/dicas.component';
import { TextoPrincipalComponent } from './componentes/texto-principal/texto-principal.component';
import { DestaqueComponent } from './componentes/destaque/destaque.component';
import { CardCidadeComponent } from './componentes/card-cidade/card-cidade.component';
import { CardCidadeFotosComponent } from './componentes/card-cidade-fotos/card-cidade-fotos.component';
import { CidadeComponent } from './paginas/cidade/cidade.component';
import { FooterComponent } from './componentes/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LinkExternoComponent,
    HomeComponent,
    ContatoComponent,
    CidadesComponent,
    MapaComponent,
    DicasComponent,
    TextoPrincipalComponent,
    DestaqueComponent,
    CardCidadeComponent,
    CardCidadeFotosComponent,
    CidadeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
