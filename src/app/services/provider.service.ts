import { Injectable } from '@angular/core';
import { IWorkExperince } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private workExperience: IWorkExperince [] = [
    {
      companyName: 'CIDE (Centro de Investigación y Docencia)',
      dates: 'Octubre 2020 - Mayo 2021',
      position: 'Desarrollador Frontend',
      descriptions: [
        "Desarrollador Frontend especializado en Angular.",
        "Colaboración en la creación de un sitio con información detallada sobre sectores como minería, turismo y pesca.",
        "Integración de datos desde una base de datos no relacional de MongoDB para generar gráficas de registros históricos de México.",
        "Refactorización de componentes y métodos para mejorar la dinámica y eficiencia del código.",
        "Implementación de gráficas visuales utilizando la librería Chart.js.",
        "Contribución en el desarrollo de métodos en el backend para extraer información de diversas colecciones en la base de datos."
      ]
    },
    {
      companyName: 'Sithec',
      dates: 'Mayo 2021 - Abril 2023',
      position: 'Desarrollador fullstak',
      descriptions: [ 
        "Desarrollador Full Stack con experiencia en Angular y Node.js.",
        "Participación como desarrollador externo en el equipo de expansión internacional para Kavak.",
        "Colaboración en el desarrollo en Argentina, implementando un backend para conectar el catálogo de Kavak con las publicaciones de Mercado Libre.",
        "Trabajo en lanzamientos en Colombia, Perú y Chile, adaptando componentes y métodos en el frontend y backend para satisfacer las necesidades específicas de cada país.",
        "Participación en proyectos de desarrollo de sitios administrativos para la gestión de inventarios, clientes y otros aspectos operativos.",
        "Colaboración en la creación de sitios informativos según los requisitos específicos de los clientes.",
        "Experiencia en metodología ágil Scrum, utilizando Jira para la gestión de tareas, sprints y ceremonias del proceso.",
        "Participación en la implementación de la gestión de pagos por país utilizando microservicios."
      ]
    },{
      companyName: 'It-Seekers',
      dates: 'Julio 2023 - Actualmente',
      position: 'Desarrollador frontend',
      descriptions:[
        "Desarrollador Frontend con Angular para Assurant, enfocado en la gestión de garantías en sitios internacionales.",
        "Trabajo en el desarrollo de sitios específicos para reclamos de garantías en diferentes países.",
        "Integración de un sistema de inicio de sesión preexistente del cliente al portal desarrollado.",
        "Experiencia con la metodología Scrum utilizando AzureDevOps y Trello como herramientas.",
        "Desarrollo de métodos en el backend con Node.js y manejo de aspectos de configuración y publicación en Azure.",
        "Implementación de nuevas características para cumplir con las reglas de negocio y adaptación dinámica de componentes y métodos." 
      ]
    }
  ]

  constructor() { }

  public get getWorkExperience(): IWorkExperince []{
    return this.workExperience;
  }
}
