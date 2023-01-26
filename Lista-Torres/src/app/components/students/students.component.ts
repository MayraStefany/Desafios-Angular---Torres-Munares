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
    'Fecha de inicio',
  ];

  rows=[
    {
      ID: '0',
      Nombre: 'Matias Matus',
      Postulacion: 'Universidad de Mánchester',
      Idioma: 'Español',
      Nota: '16',
      Fecha_inicio: '01/02/2023',
    },
    {
      ID: '1',
      Nombre: 'Melani Munares',
      Postulacion: 'Universidad de Birmingham',
      Idioma: 'Español',
      Nota: '19',
      Fecha_inicio: '07/02/2023',
    },
    {
      ID: '2',
      Nombre: 'Mayra Torres',
      Postulacion: 'Universidad de Oxford',
      Idioma: 'Español',
      Nota: '20',
      Fecha_inicio: '08/02/2023',
    },
    {
      ID: '3',
      Nombre: 'Tomas Castro',
      Postulacion: 'Universidad de Edimburgo',
      Idioma: 'Español',
      Nota: '17',
      Fecha_inicio: '01/02/2023',
    },
    {
      ID: '4',
      Nombre: 'Isabella Vera',
      Postulacion: 'Universidad de Leeds',
      Idioma: 'Español',
      Nota: '18',
      Fecha_inicio: '10/02/2023',
    },
    {
      ID: '5',
      Nombre: 'Alexandra Castro',
      Postulacion: 'Universidad de York',
      Idioma: 'Español',
      Nota: '20',
      Fecha_inicio: '10/02/2023',
    },

  ];

}
