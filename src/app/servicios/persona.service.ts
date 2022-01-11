import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ModeloPersona } from 'src/modelos/persona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:3000';
  token:String='';

  constructor(private http:HttpClient, private seguridadService: SeguridadService) { }


  ConsultarPersonas():Observable<ModeloPersona[]>{
    return this.http.get<ModeloPersona[]>(`${this.url}/personas`);
  
  }

  ConsultarPersonaPorId(id:string):Observable<ModeloPersona>{
    return this.http.get<ModeloPersona>(`${this.url}/personas/${id}`);

  }

  CrearPersona(persona: ModeloPersona):Observable<ModeloPersona> {
    return this.http.post<ModeloPersona>(`${this.url}/personas`,persona,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPersona(persona: ModeloPersona):Observable<ModeloPersona> {
    return this.http.put<ModeloPersona>(`${this.url}/personas/${persona.id}`,persona,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPersona(id: String):Observable<any> {
    return this.http.delete<ModeloPersona>(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}


