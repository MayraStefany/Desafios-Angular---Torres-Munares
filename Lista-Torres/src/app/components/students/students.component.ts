import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  title = 'Resultado de Alumnos de Intercambio';

  /* Para hacer el contenido de header de una TABLA */
  headers =[
    'ID',
    'Nombre y Apellido',
    'Postulación',  /*Universidad de intercambio*/
    'Idioma',
    'Nota Promedio',
    'Fecha de inicio',
    'img',
  ];

  /* Lista de los estudiantes */
  rows=[
    {
      ID: '0',
      Nombre: 'Matias Matus',
      Postulacion: 'Universidad de Mánchester',
      Idiomas: ['Español', ' Ingles'],
      Nota: '16',
      Fecha_inicio: '01/02/2023',
      imagen: 'https://business.twitter.com/content/dam/business-twitter/a/UniversityofManchester.jpg.twimg.1920.jpg'
    },
    {
      ID: '1',
      Nombre: 'Melani Munares',
      Postulacion: 'Universidad de Birmingham',
      Idiomas: ['Español', ' Catalan'],
      Nota: '19',
      Fecha_inicio: '07/02/2023',
      imagen: 'https://img.emg-services.net/institutes/institute38004/universityofbirmingham_institute-1.png',
    },
    {
      ID: '2',
      Nombre: 'Mayra Torres',
      Postulacion: 'Universidad de Oxford',
      Idiomas: ['Español',' Ingles',' Italiano'],
      Nota: '20',
      Fecha_inicio: '08/02/2023',
      imagen: 'https://revistaembajador.com/wp-content/uploads/2020/09/imp-universidad.jpg',
    },
    {
      ID: '3',
      Nombre: 'Tomas Castro',
      Postulacion: 'Universidad de Edimburgo',
      Idiomas: ['Español',' Frances'],
      Nota: '11',
      Fecha_inicio: '01/02/2023',
      imagen: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/149000/149453-University-Of-Edinburgh.jpg',
    },
    {
      ID: '4',
      Nombre: 'Isabella Vera',
      Postulacion: 'Universidad de Leeds',
      Idiomas: ['Español',' Frances',' Ingles'],
      Nota: '17',
      Fecha_inicio: '10/02/2023',
      imagen: 'https://i0.wp.com/oyaschool.com/wp-content/uploads/2019/01/Leeds-Beckett-University_UK_background.jpg?fit=1200%2C485&ssl=1',
    },
    {
      ID: '5',
      Nombre: 'Alexandra Castro',
      Postulacion: 'Universidad de York',
      Idiomas: ['Español',' Portugues',' Ingles',' Frances'],
      Nota: '13',
      Fecha_inicio: '10/02/2023',
      imagen: 'https://www.kaplanpathways.com/wp-content/uploads/2018/02/york-degree-power-scaled-1440x560.jpeg',
    },

  ];

}
