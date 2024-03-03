import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { IWorkExperince } from '../../interfaces/interfaces';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent]
})
export class HomeComponent implements OnInit {

  works: IWorkExperince[] = [];

  constructor( private providerService: ProviderService){}

  ngOnInit(): void {
    this.works = this.providerService.getWorkExperience;
  }

  
}
