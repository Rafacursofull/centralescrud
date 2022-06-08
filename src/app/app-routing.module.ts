import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageUsuariosComponent} from "./usuarios/page-usuarios/page-usuarios.component";
import {PageCentralesComponent} from "./centrales/page-centrales/page-centrales.component";
import {PageIncidenciasComponent} from "./incidencias/page-incidencias/page-incidencias.component";

const routes: Routes = [
  { path: "", component :PageUsuariosComponent, pathMatch: "full"},
  { path: "centrales" , component :PageCentralesComponent},
  { path: "incidencias" , component : PageIncidenciasComponent},
  { path: "usuarios" , component: PageUsuariosComponent},
  { path: "**", redirectTo: ""}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
