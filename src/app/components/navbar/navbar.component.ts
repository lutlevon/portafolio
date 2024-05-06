import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(){
  }
  scroll(id: string){
    let element = document.getElementById(id);
    window.scrollTo({
      behavior: 'smooth',
      top:
        element!.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        65,
    })
  }
}
