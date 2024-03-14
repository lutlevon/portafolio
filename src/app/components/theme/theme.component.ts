import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {

  theme:string = '';
  isDarkTheme = true;
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    this.theme = localStorage?.getItem('theme') || 'dark';
    this.isDarkTheme = this.theme === 'dark'? true: false;
  }

  ngOnInit(): void {
    
  }

  changeTheme(){
    this.isDarkTheme = !this.isDarkTheme;
    this.theme = this.isDarkTheme? 'dark': 'light';
    localStorage.setItem('theme', this.theme );
  }

}
