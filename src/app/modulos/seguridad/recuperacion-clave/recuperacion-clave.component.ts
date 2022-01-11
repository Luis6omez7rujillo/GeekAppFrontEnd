import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperacion-clave',
  templateUrl: './recuperacion-clave.component.html',
  styleUrls: ['./recuperacion-clave.component.css']
})
export class RecuperacionClaveComponent implements OnInit {

  fgValidador:FormGroup = this.fb.group({
    'correo':['',[Validators.required,Validators.email]],
    
 });

  constructor(private fb:FormBuilder, private servicioSeguridad:SeguridadService) { }

  ngOnInit(): void {

  }

  Restablecer(){
    let correo=this.fgValidador.controls["correo"].value;
    
    
    this.servicioSeguridad.Validar(correo).subscribe((datos: any)=>{
      //OK
      //this.servicioSeguridad.AlmacenarSesion(datos);
      alert('Nueva contraseña generada para'+correo);
     
    },
    (error: any)=>{
      //KO
      alert("El usuario con el correo ingresado no existe")
      
    })
    
    
  }



}
