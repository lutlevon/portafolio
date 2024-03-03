import { Component, Input, OnInit } from '@angular/core';
import { IWorkExperince } from '../../interfaces/interfaces';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})


export class WorkExperienceComponent implements OnInit{
  
  works: IWorkExperince [] = [];
  
  constructor( private providerService: ProviderService ){}

  ngOnInit(): void {
    this.works = this.providerService.getWorkExperience;
  }
}
