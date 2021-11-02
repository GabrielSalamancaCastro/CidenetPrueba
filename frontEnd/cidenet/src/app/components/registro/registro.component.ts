import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  empleadoForm: FormGroup = new FormGroup({});

  constructor(private empleadoService:EmpleadoService) { 
    this.empleadoForm = new FormGroup(
    {
      primerApellido: new FormControl(null, [Validators.required]),
      segundoApellido: new FormControl(null, [Validators.required]),
      primerNombre: new FormControl(null, [Validators.required]),
      otrosNombre: new FormControl(null, [Validators.required]),
      paisEmpleo: new FormControl(null, [Validators.required]),
      tipoIdentificacion: new FormControl(null, [Validators.required]),
      numeroIdentificacion: new FormControl(null, [Validators.required]),
      fechaIngreso: new FormControl(null, [Validators.required]),
      area: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required])
    }
    )
  }

  ngOnInit(): void {
  }

  empleadoPost(){
    this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe(console.log);
  }

  
}
