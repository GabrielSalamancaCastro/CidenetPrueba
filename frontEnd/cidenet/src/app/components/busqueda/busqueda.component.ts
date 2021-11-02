import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  empleados:any[] = [];
  busquedaApellido:string="";
  busquedaDocumento:string="";
  busquedaArea:String="";
  busquedaTipoDocumento:String="";
  busquedaEmail:String="";
  busquedaPaisEmpleo:String="";

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.refrescarEmpleados();
  }

  empleadoDelete(empleadoID:any){
    let confirmacion:any= confirm("ESTA SEGURO QUE QUIERE BORRAR AL EMPLEADO?")
    if(confirmacion){
      this.empleadoService.deleteEmpleado(empleadoID).subscribe(()=>this.refrescarEmpleados());
    }
  }

  refrescarEmpleados(){
    this.empleadoService.getEmpleados().subscribe((empleados:any)=> this.empleados=empleados)
  }

  buscarEmpleadoApellido(){
    this.empleadoService.getEmpleadoByApellido(this.busquedaApellido).subscribe((resultado:any)=>{
      this.empleados=resultado;
    });
  }

  buscarEmpleadoArea(){
    this.empleadoService.getEmpleadoByArea(this.busquedaArea).subscribe((resultado:any)=>{
      this.empleados=resultado;
    });
  }

  buscarEmpleadoTipoDocumento(){
    this.empleadoService.getEmpleadoByTipoDocumento(this.busquedaTipoDocumento).subscribe((resultado:any)=>{
      this.empleados=resultado;
    });
  }

  buscarEmpleadoPaisEmpleo(){
    this.empleadoService.getEmpleadoByPaisEmpleo(this.busquedaPaisEmpleo).subscribe((resultado:any)=>{
      this.empleados=resultado;
    });
  }

  buscarEmpleadoDocumento(){
    this.empleadoService.getEmpleadoByNumeroIdentificacion(this.busquedaDocumento).subscribe((resultado:any)=>{
      this.empleados=[]
      this.empleados.push(resultado);
    });
  }

  buscarEmpleadoEmail(){
    this.empleadoService.getEmpleadoByEmail(this.busquedaEmail).subscribe((resultado:any)=>{
      this.empleados=[]
      this.empleados.push(resultado);
    });
  }

}
