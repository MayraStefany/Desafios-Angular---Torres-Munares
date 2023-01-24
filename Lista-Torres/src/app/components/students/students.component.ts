import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title = 'Resultado de Alumnos de Intercambio';

  headers =[
    'ID',
    'Nombre y Apellido',
    'Postulación',  /*Universidad de intercambio*/
    'Idioma',
    'Nota Promedio',
  ];
}
