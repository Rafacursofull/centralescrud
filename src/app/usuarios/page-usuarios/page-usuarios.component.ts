import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/interfaces/usuario.interface";
import {UsuariosService} from "../../shared/services/usuarios.service";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css'],
  providers: [MessageService]
})
export class PageUsuariosComponent implements OnInit {

  //Usar el servicio UsuariosService
  public listaUsuarios?: Usuario[];

  public cargando: boolean;

  constructor(private _usuariosService: UsuariosService, private _mensajesServices: MessageService) {
    this.cargando= false;
  }

  ngOnInit(): void {
    this.datosUsuarios();
  }


  public eliminarUsuario(){
    this._mensajesServices.add({
      severity: "error",
      summary: "error",
      detail: "hubo un error",
      life: 5000,
      sticky: true
    });

  }
  public datosUsuarios() {
    this.cargando= true;
    this._usuariosService.getUsuarios().subscribe(
      {
        next: (resp) => {
          console.log("Respuesta: ", resp);
          this.listaUsuarios = resp;
        },
        error: () => {
          this._mensajesServices.add({
            severity: "error",
            summary: "error",
            detail: "hubo un error",
            life: 5000,
            sticky: true
          });
        },
        complete: (
        ) => {
          this.cargando=false;
        }

      });
  }
}


