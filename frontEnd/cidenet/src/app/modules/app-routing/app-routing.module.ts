import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { BusquedaComponent } from 'src/app/components/busqueda/busqueda.component';



const rutas:Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "registro",

  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "busqueda",
    component: BusquedaComponent
  }


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ]
})
export class AppRoutingModule { }
