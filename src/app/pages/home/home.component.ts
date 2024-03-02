import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { IWorkExperince } from '../../interfaces/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  works: IWorkExperince[] = [];

  constructor( private providerService: ProviderService){}

  ngOnInit(): void {
    this.works = this.providerService.getWorkExperience;
  }

  
}
