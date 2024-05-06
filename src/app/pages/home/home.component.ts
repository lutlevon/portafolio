import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { IWorkExperince } from '../../interfaces/interfaces';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, RouterOutlet, AboutComponent, WorkExperienceComponent,ContactComponent]
})
export class HomeComponent {

  works: IWorkExperince[] = [];

  constructor(){}

}

