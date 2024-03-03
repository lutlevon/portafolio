import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        { path: 'about', component: AboutComponent},
        { path: 'work-experience', component: WorkExperienceComponent}
    ]},
    { path: '**', redirectTo: 'home/about', pathMatch: 'full'}
];
