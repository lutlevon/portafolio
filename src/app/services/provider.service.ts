import { Injectable } from '@angular/core';
import { IWorkExperince } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private workExperience: IWorkExperince [] = [
    {
      companyName: 'CIDE (Centro de Investigación y Docencia)',
      dates: 'October 2019 - May 2020',
      position: 'Frontend Developer',
      descriptions: [
        'Refacotización de peticiones al back end'
      ]
    }
  ]

  constructor() { }

  public get getWorkExperience(): IWorkExperince []{
    return this.workExperience;
  }
}
