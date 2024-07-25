import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        { path: '', component: AboutComponent},
        { path: 'work-experience', component: WorkExperienceComponent},
        { path: 'contact', component: ContactComponent }
    ]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
