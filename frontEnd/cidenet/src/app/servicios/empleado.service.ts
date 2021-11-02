import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient ) {

   }

  //METODOS GET 

  getEmpleados(){
    return this.http.get('http://localhost:8080/empleados/all');
  } 

  getEmpleadoByApellido(apellido:any){
    return this.http.get(`http://localhost:8080/empleados/primerApellido/${apellido}`)
  }

  getEmpleadoByNumeroIdentificacion(numero:any){
    return this.http.get(`http://localhost:8080/empleados/documento/${numero}`)
  }

  getEmpleadoByArea(area:any){
    return this.http.get(`http://localhost:8080/empleados/area/${area}`)
  }

  getEmpleadoByEmail(email:any){
    return this.http.get(`http://localhost:8080/empleados/email/${email}`)
  }

  getEmpleadoByTipoDocumento(tipoDocumento:any){
    return this.http.get(`http://localhost:8080/empleados/tipoDocumento/${tipoDocumento}`)
  }

  getEmpleadoByPaisEmpleo(paisEmpleo:any){
    return this.http.get(`http://localhost:8080/empleados/paisEmpleo/${paisEmpleo}`)
  }

  



  //METODO POST
  createEmpleado(Empleado:any){
    console.log(Empleado);
    return this.http.post('http://localhost:8080/empleados/save', Empleado)
  }

  deleteEmpleado(id:any){
    return this.http.delete(`http://localhost:8080/empleados/delete/${id}`)
  }
}
