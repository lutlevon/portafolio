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
        "Encargado de desarrollar un sitio de registros históricos para el Centro de Investigación y Docencia Económicas (CIDE).",
        "Diseño e implementación de gráficos estadísticos utilizando la librería Chart.js.",
        "Integración y consumo de datos almacenados en colecciones de MongoDB.",
        "Refactorización de componentes y servicios para mejorar la limpieza y eficiencia del código."
      ]
    },
    {
      companyName: 'Sithec',
      dates: 'Mayo 2021 - Abril 2023',
      position: 'Desarrollador fullstak',
      descriptions: [ 
        "Creación de frontends con Angular para sistemas de administración empresarial (CRUD).",
        "Diseño y maquetación de sitios publicitarios utilizando Angular.",
        "Desarrollo de backend con .NET, utilizando arquitectura de microservicios para diversos proyectos.",
        "Desarrollador externo para kavak",
        "Participación activa en el equipo de expansión de KAVAK, adaptando el sitio para lanzamientos en Argentina, Chile, Colombia y Perú.",
        "Implementación de metodología ágil Scrum, utilizando Jira como principal herramienta de gestión de tareas.",
        "Desarrollo de backend con Node.js para la integración de herramientas como Mercado Libre con el sitio de KAVAK.",
        "Refactorización de componentes de Angular para ajustarse a las necesidades de los nuevos países.",
        "Creación de backend con Node.js para nuevas implementaciones, asegurando el cumplimiento de normativas locales.",
        "Desarrollo de backend mediante la arquitectura de microservicios."
      ]
    },{
      companyName: 'It-Seekers',
      dates: 'Julio 2023 - Actualmente',
      position: 'Desarrollador frontend',
      descriptions:[
        "Desarrollador frontend con Angular, trabajando en proyectos para Assurant.",
        "Adaptación de un sitio para generar reclamos de garantías.",
        "Realización de refactorizaciones para mejorar el proyecto.",
        "Desarrollo de un apartado para que el cliente pueda configurar diferentes partes dinámicas del sitio.",
        "Implementación del sitio para clientes de Brasil, Chile y Colombia, adaptándolo a las necesidades específicas de cada cliente."      
      ]
    }
  ]

  constructor() { }

  public get getWorkExperience(): IWorkExperince []{
    return this.workExperience;
  }
}
